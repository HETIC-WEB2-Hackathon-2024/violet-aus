import { query } from "../config/database";

interface Option {
  filter?: [
    {
      value1: any;
      value2: any;
      comparateur: string;
    }
  ];
  sort?: [
    {
      key: string;
      value: "ASC" | "DESC";
    }
  ];
  limit?: number;
  offset?: number;
}

export default class HelperRepository {
  private entity: string;
  private fKey?: { key: string; reference: string; columns: string[] }[];

  constructor(
    entity: string,
    fKey?: { key: string; reference: string; columns: string[] }[]
  ) {
    this.entity = entity;
    this.fKey = fKey;
  }

  async findById(id: number): Promise<any> {
    const sql = `SELECT * FROM ${this.entity} WHERE id = $1`;
    const result = await query(sql, [id]);
    return result;
  }

  async findAll(): Promise<any> {
    const sql = `SELECT * FROM ${this.entity} LIMIT 10`;
    const result = await query(sql);
    return result;
  }

  async createOne(data: any): Promise<any> {
    const keys: string = Object.keys(data).join(", ");
    const valuesArray = Object.values(data);
    const values: string = valuesArray.map((value) => `'${value}'`).join(", ");

    const sql = `INSERT INTO ${this.entity} (${keys}) VALUES (${values}) RETURNING *`;

    const result = await query(sql);
    return result;
  }

  async create(datas: [any]): Promise<any> {
    const keys: string = Object.keys(datas[0]).join(", ");

    let values = "";
    datas.forEach((data, index) => {
      const valuesArray = Object.values(data);
      values += "(" + valuesArray.map((value) => `'${value}'`) + ")";

      if (index < datas.length - 1) {
        values += ", ";
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
    let values = "";

    keys.forEach((key, index) => {
      values += `${key} = '${data[key]}'`;

      if (index < keys.length - 1) {
        values += ", ";
      }
    });

    const sql = `UPDATE ${this.entity} SET ${values} WHERE id = $1 RETURNING *`;
    const result = await query(sql, [id]);
    return result;
  }
}
