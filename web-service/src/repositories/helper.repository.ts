import { query } from '../config/database';

interface Option {
  filter?: [
    {
      value1: any,
      value2: any,
      comparateur: string
    }
    
  ], 
  sort?: [
    {
      key: string, 
      value: 'ASC'|'DESC'
    }
  ],
  limit?: number,
  offset?: number
}

export default class HelperRepository {
  private entity: string;
  private fKey: {key:string, reference: string}[];

  constructor(entity: string, fKey: {key:string, reference: string}[]) {
    this.entity = entity;
    this.fKey = fKey;
  }

  async findById(id: number): Promise<any> {
    const sql = `SELECT * FROM ${this.entity} WHERE id = $1`;
    const result = await query(sql, [id]);
    return result;
  }

//   async findByIdExtend(id: number): Promise<any> {
    
//     const join = this.fKey.map((foreignKey) => `LEFT JOIN ${foreignKey.reference} ON ${foreignKey.reference}.id = ${this.entity}.${foreignKey.key}')' `).join(' ')
//     let values = ''
//     this.fKey.map((foreignKey) => {
//       values += `, JSON_BUILD_OBJECT(*) AS ${foreignKey.reference}`
//     })

//     const join = this.fKey.map((foreignKey) => 
//       `LEFT JOIN ${foreignKey.reference} ON ${foreignKey.reference}.id = ${this.entity}.${foreignKey.key}`).join(' ');
  
//     // Build the JSON_BUILD_OBJECT statements dynamically
//     const jsonFields = this.fKey.map((foreignKey) => 
//       `, JSON_BUILD_OBJECT(${foreignKey.reference}.id, ${foreignKey.reference}.id, ${foreignKey.reference}.name, ${foreignKey.reference}.name) AS ${foreignKey.reference}`).join(' ');
  
    
//     console.log (join)
//     console.log (values)
//     const sql = `SELECT * ${values} FROM ${this.entity} ${join} WHERE id = $1`;

//     const result = await query(sql, [id]);
//     return result.rows[0];
// }

  async findAll(): Promise<any> {
    // TO REMOVE: I set the limit for avoid to crash my localhost
    const sql = `SELECT * FROM ${this.entity} LIMIT 10`;
    const result = await query(sql);
    return result;
  }

  // async findByOption(entity: string, option: Option): Promise<any> {
  //   let queryString = `SELECT * FROM ${entity} WHERE `;
  //   const filterKeys = Object.keys(option.filter);
  //   filterKeys.forEach((key, index) => {
  //     queryString += `${key} = '${option.filter[key]}'`;
  //     if (index < filterKeys.length - 1) {
  //       queryString += ' AND ';
  //     }
  //   });
  //   return query(queryString);
  // }


  async createOne(data: any): Promise<any> {
    const keys:string = Object.keys(data).join(', ');
    const valuesArray  = Object.values(data)
    const values:string = valuesArray.map((value) => `'${value}'`).join(', ');

    const sql = `INSERT INTO ${this.entity} (${keys}) VALUES (${values}) RETURNING *`;
  
    const result = await query(sql);
    return result;
  }

  async create(datas: [any]): Promise<any> {
    const keys:string = Object.keys(datas[0]).join(', ');

    let values = '';
    datas.forEach((data, index) => {

      const valuesArray  = Object.values(data)
      values += '(' + valuesArray.map((value) => `'${value}'`) +')';

      if (index < datas.length - 1) {
        values += ', ';
      }
    });

    const sql = `INSERT INTO ${this.entity} (${keys}) VALUES ${values} RETURNING *`;
  
    const result = await query(sql);
    return result;
  }

  async deleteById(id: number): Promise<any> {
    const sql = `DELETE FROM ${this.entity} WHERE id = $1`;
    const result = await query(sql, [id]);
    return result;
  }

  async updateById(id: number, data: any): Promise<any> {
    const keys = Object.keys(data);
    let values = '';

    keys.forEach((key, index) => {
      values += `${key} = '${data[key]}'`;

      if (index < keys.length - 1) {
        values += ', ';
      }
    });

    const sql = `UPDATE ${this.entity} SET ${values} WHERE id = $1 RETURNING *`;;
    const result = await query(sql, [id]);
    return result;
  }
}