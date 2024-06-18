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
  async findById(entity: string, id: number): Promise<any> {
    return query(`SELECT * FROM ${entity} WHERE id = ${id}`);
  }

  async findAll(entity: string): Promise<any> {
    return query(`SELECT * FROM ${entity}`);
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

  async create(entity: string, data: any): Promise<any> {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const queryString = `INSERT INTO ${entity} (${keys.join(', ')}) VALUES (${values.map((value) => `'${value}'`).join(', ')})`;
    return query(queryString);
  }

  async deleteById(entity: string, id: number): Promise<any> {
    return query(`DELETE FROM ${entity} WHERE id = ${id}`);
  }

  async updateById(entity: string, id: number, data: any): Promise<any> {
    let queryString = `UPDATE ${entity} SET `;
    const keys = Object.keys(data);
    keys.forEach((key, index) => {
      queryString += `${key} = '${data[key]}'`;
      if (index < keys.length - 1) {
        queryString += ', ';
      }
    });
    queryString += ` WHERE id = ${id}`;
    return query(queryString);
  }
}