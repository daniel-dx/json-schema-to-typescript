import {compile} from './src'

// @ts-ignore
async function main() {
  // const jsonschema: any = {
  //   "type": "object",
  //   "properties": {
  //     "app_model_arr": {
  //       "title": "结果列表",
  //       "type": "object",
  //       "required": [],
  //       "additionalProperties": true,
  //       "properties": {
  //         "total": {
  //           "title": "记录总条数",
  //           "type": "number",
  //           "x-index": 1
  //         },
  //         "pageNo": {
  //           "title": "页码",
  //           "type": "number",
  //           "x-index": 2
  //         },
  //         "pageSize": {
  //           "title": "每页大小",
  //           "type": "number",
  //           "x-index": 3
  //         },
  //         "records": {
  //           "title": "记录列表",
  //           "type": "array",
  //           "items": {
  //             "type": "object",
  //             "properties": {
  //               "owner": {
  //                 "default": "",
  //                 "x-system": true,
  //                 "x-id": "df20c14",
  //                 "name": "owner",
  //                 "format": "father-son",
  //                 "pattern": "",
  //                 "x-index": 4,
  //                 "title": "所有人",
  //                 "type": "string",
  //                 "x-unique": false,
  //                 "x-parent": {
  //                   "fatherAction": "judge",
  //                   "parentViewId": "view-3le757scnk",
  //                   "type": "father-son",
  //                   "parentDataSourceName": "sys_user"
  //                 }
  //               },
  //               "zzmxnv1": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "9f8e0b5",
  //                 "format": "related",
  //                 "description": "",
  //                 "type": "string",
  //                 "x-index": 33,
  //                 "title": "主子明细nv1",
  //                 "x-unique": false,
  //                 "x-parent": {
  //                   "fatherAction": "related",
  //                   "parentViewId": "view-3l50zg9ecg",
  //                   "type": "related",
  //                   "parentDataSourceName": "sys_department"
  //                 }
  //               },
  //               "mjdx": {
  //                 "x-keyPath": "",
  //                 "x-id": "7d4c503",
  //                 "format": "x-enum",
  //                 "description": "",
  //                 "x-option-name": "qjlx",
  //                 "type": "array",
  //                 "x-index": 25,
  //                 "title": "枚举多选",
  //                 "x-unique": false,
  //                 "x-required": false,
  //                 "x-enum-type": "general-option",
  //                 "x-multi-select": true,
  //                 "items": {
  //                   "type": "string"
  //                 }
  //               },
  //               "glgxnv1": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "913c99f",
  //                 "format": "father-son",
  //                 "description": "",
  //                 "type": "string",
  //                 "x-index": 29,
  //                 "title": "关联关系nv1",
  //                 "x-unique": false,
  //                 "x-parent": {
  //                   "fatherAction": "prompt-not-delete",
  //                   "parentViewId": "view-3k6swq2aw0",
  //                   "type": "father-son",
  //                   "parentDataSourceName": "xs_xe52w7c"
  //                 }
  //               },
  //               "szdxszdx": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "a2dd935",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "array",
  //                 "x-index": 37,
  //                 "title": "数组对象数组对象",
  //                 "items": {
  //                   "format": "",
  //                   "type": "object",
  //                   "properties": {
  //                     "arr": {
  //                       "x-required": false,
  //                       "x-keyPath": "",
  //                       "x-id": "7fc6ddf",
  //                       "format": "",
  //                       "name": "arr",
  //                       "description": "",
  //                       "type": "array",
  //                       "x-index": 2,
  //                       "title": "arr",
  //                       "items": {
  //                         "format": "",
  //                         "type": "object",
  //                         "properties": {
  //                           "name": {
  //                             "x-required": false,
  //                             "x-keyPath": "",
  //                             "x-id": "74bc4f3",
  //                             "format": "",
  //                             "name": "name",
  //                             "description": "",
  //                             "type": "string",
  //                             "x-index": 2,
  //                             "title": "name",
  //                             "x-unique": false
  //                           }
  //                         }
  //                       },
  //                       "x-unique": false,
  //                       "required": []
  //                     }
  //                   }
  //                 },
  //                 "x-unique": false,
  //                 "required": []
  //               },
  //               "glgx": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "6c622b6",
  //                 "format": "father-son",
  //                 "description": "",
  //                 "type": "string",
  //                 "x-index": 27,
  //                 "title": "关联关系1v1",
  //                 "x-unique": true,
  //                 "x-parent": {
  //                   "fatherAction": "prompt-not-delete",
  //                   "parentViewId": "view-3k6swq2aw0",
  //                   "type": "father-son",
  //                   "parentDataSourceName": "xs_xe52w7c"
  //                 }
  //               },
  //               "sz": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "797fffa",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "array",
  //                 "x-index": 15,
  //                 "title": "标签_文本数组",
  //                 "items": {
  //                   "format": "",
  //                   "type": "string"
  //                 },
  //                 "x-unique": false
  //               },
  //               "ah": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-enum-type": "general-option",
  //                 "x-id": "b4d8ed7",
  //                 "format": "x-enum",
  //                 "description": "",
  //                 "x-option-name": "ah",
  //                 "type": "string",
  //                 "x-index": 19,
  //                 "title": "爱好_枚举",
  //                 "x-multi-select": false,
  //                 "x-unique": false
  //               },
  //               "_departmentList": {
  //                 "default": "",
  //                 "x-system": true,
  //                 "x-id": "7b2d4f1",
  //                 "format": "",
  //                 "name": "_departmentList",
  //                 "title": "所属部门",
  //                 "type": "array",
  //                 "x-index": 7,
  //                 "items": {
  //                   "type": "string"
  //                 },
  //                 "x-unique": false
  //               },
  //               "nl_sz": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "7a431c9",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "number",
  //                 "x-index": 11,
  //                 "title": "年龄_数字",
  //                 "x-unique": false
  //               },
  //               "tx_tp": {
  //                 "x-image-size": 1048576,
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "b209505",
  //                 "format": "x-image",
  //                 "description": "",
  //                 "x-image-support": [
  //                   "image/jpeg"
  //                 ],
  //                 "type": "string",
  //                 "x-index": 21,
  //                 "title": "头像_图片",
  //                 "x-unique": false
  //               },
  //               "sb": {
  //                 "x-keyPath": "",
  //                 "x-id": "7b17caa",
  //                 "format": "",
  //                 "description": "",
  //                 "isEnum": false,
  //                 "type": "array",
  //                 "x-index": 23,
  //                 "title": "书本列表",
  //                 "list": [
  //                   {
  //                     "x-keyPath": "",
  //                     "x-id": "a4a1d89",
  //                     "format": "",
  //                     "description": "",
  //                     "pId": "7b17caa",
  //                     "type": "object",
  //                     "x-index": 2,
  //                     "title": "书本",
  //                     "list": [
  //                       {
  //                         "x-required": false,
  //                         "x-keyPath": "",
  //                         "x-id": "8125d44",
  //                         "format": "",
  //                         "name": "sm",
  //                         "description": "",
  //                         "pId": "a4a1d89",
  //                         "type": "string",
  //                         "x-index": 2,
  //                         "title": "书名",
  //                         "x-unique": false
  //                       }
  //                     ],
  //                     "x-unique": false,
  //                     "required": [],
  //                     "x-required": false,
  //                     "name": "sb_item",
  //                     "properties": {
  //                       "sm": {
  //                         "x-required": false,
  //                         "x-keyPath": "",
  //                         "x-id": "8125d44",
  //                         "format": "",
  //                         "name": "sm",
  //                         "description": "",
  //                         "type": "string",
  //                         "x-index": 2,
  //                         "title": "书名",
  //                         "x-unique": false
  //                       }
  //                     }
  //                   }
  //                 ],
  //                 "x-unique": false,
  //                 "required": [],
  //                 "x-required": false,
  //                 "name": "sb",
  //                 "items": {
  //                   "format": "",
  //                   "type": "object",
  //                   "properties": {
  //                     "sm": {
  //                       "x-required": false,
  //                       "x-keyPath": "",
  //                       "x-id": "9f2d0b8",
  //                       "format": "",
  //                       "name": "sm",
  //                       "description": "",
  //                       "type": "string",
  //                       "x-index": 2,
  //                       "title": "书名",
  //                       "x-unique": false
  //                     }
  //                   }
  //                 }
  //               },
  //               "createdAt": {
  //                 "default": 0,
  //                 "x-system": true,
  //                 "x-id": "982c8ec",
  //                 "format": "datetime",
  //                 "x-index": 2,
  //                 "type": "number",
  //                 "title": "创建时间",
  //                 "x-unique": false
  //               },
  //               "createBy": {
  //                 "default": "",
  //                 "x-system": true,
  //                 "x-id": "25e89cd",
  //                 "name": "createBy",
  //                 "format": "father-son",
  //                 "pattern": "",
  //                 "x-index": 5,
  //                 "type": "string",
  //                 "title": "创建人",
  //                 "x-unique": false,
  //                 "x-parent": {
  //                   "fatherAction": "judge",
  //                   "parentViewId": "view-3le757scnk",
  //                   "type": "father-son",
  //                   "parentDataSourceName": "sys_user"
  //                 }
  //               },
  //               "xb_bez": {
  //                 "x-required": false,
  //                 "default": true,
  //                 "x-keyPath": "",
  //                 "x-id": "719ae35",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "boolean",
  //                 "x-index": 13,
  //                 "title": "性别_布尔值",
  //                 "x-unique": false
  //               },
  //               "updateBy": {
  //                 "default": "",
  //                 "x-system": true,
  //                 "x-id": "93a079a",
  //                 "name": "updateBy",
  //                 "format": "father-son",
  //                 "pattern": "",
  //                 "x-index": 6,
  //                 "type": "string",
  //                 "title": "修改人",
  //                 "x-unique": false,
  //                 "x-parent": {
  //                   "fatherAction": "judge",
  //                   "parentViewId": "view-3le757scnk",
  //                   "type": "father-son",
  //                   "parentDataSourceName": "sys_user"
  //                 }
  //               },
  //               "zfc": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "933aede",
  //                 "format": "",
  //                 "name": "zfc",
  //                 "description": "",
  //                 "isEnum": false,
  //                 "type": "string",
  //                 "x-index": 9,
  //                 "title": "姓名_字符串",
  //                 "x-unique": false
  //               },
  //               "szdxszyz": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "82a050d",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "array",
  //                 "x-index": 35,
  //                 "title": "数组对象数组原子",
  //                 "items": {
  //                   "format": "",
  //                   "type": "object",
  //                   "properties": {
  //                     "arr": {
  //                       "x-required": false,
  //                       "x-keyPath": "",
  //                       "x-id": "80c3e5e",
  //                       "format": "",
  //                       "name": "arr",
  //                       "description": "",
  //                       "type": "array",
  //                       "x-index": 2,
  //                       "title": "arr",
  //                       "items": {
  //                         "format": "",
  //                         "type": "string"
  //                       },
  //                       "x-unique": false
  //                     }
  //                   }
  //                 },
  //                 "x-unique": false,
  //                 "required": []
  //               },
  //               "_id": {
  //                 "default": "",
  //                 "x-system": true,
  //                 "x-id": "fa33944",
  //                 "format": "",
  //                 "pattern": "",
  //                 "x-index": 1,
  //                 "type": "string",
  //                 "title": "数据标识",
  //                 "x-unique": true
  //               },
  //               "qm_dx": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "6d34e57",
  //                 "format": "",
  //                 "description": "",
  //                 "type": "object",
  //                 "x-index": 17,
  //                 "title": "全名_对象",
  //                 "list": [
  //                   {
  //                     "x-required": false,
  //                     "x-keyPath": "",
  //                     "x-id": "b2e444c",
  //                     "format": "",
  //                     "name": "x",
  //                     "description": "",
  //                     "pId": "6d34e57",
  //                     "type": "string",
  //                     "x-index": 2,
  //                     "title": "姓",
  //                     "x-unique": false
  //                   },
  //                   {
  //                     "x-required": false,
  //                     "x-keyPath": "",
  //                     "x-id": "a1f97c3",
  //                     "format": "",
  //                     "name": "m",
  //                     "description": "",
  //                     "pId": "6d34e57",
  //                     "type": "string",
  //                     "x-index": 4,
  //                     "title": "名_必填",
  //                     "x-unique": false
  //                   }
  //                 ],
  //                 "x-unique": false,
  //                 "properties": {
  //                   "x": {
  //                     "x-required": false,
  //                     "x-keyPath": "",
  //                     "x-id": "b2e444c",
  //                     "format": "",
  //                     "name": "x",
  //                     "description": "",
  //                     "type": "string",
  //                     "x-index": 2,
  //                     "title": "姓",
  //                     "x-unique": false
  //                   },
  //                   "m": {
  //                     "x-required": false,
  //                     "x-keyPath": "",
  //                     "x-id": "a1f97c3",
  //                     "format": "",
  //                     "name": "m",
  //                     "description": "",
  //                     "type": "string",
  //                     "x-index": 4,
  //                     "title": "名_必填",
  //                     "x-unique": false
  //                   }
  //                 },
  //                 "required": []
  //               },
  //               "zzmx1v1": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "7da5de0",
  //                 "format": "related",
  //                 "description": "",
  //                 "type": "string",
  //                 "x-index": 31,
  //                 "title": "主子明细1v1",
  //                 "x-unique": true,
  //                 "x-parent": {
  //                   "fatherAction": "related",
  //                   "parentViewId": "view-3le757scnk",
  //                   "type": "related",
  //                   "parentDataSourceName": "sys_user"
  //                 }
  //               },
  //               "updatedAt": {
  //                 "default": 0,
  //                 "x-system": true,
  //                 "x-id": "7d2b760",
  //                 "format": "datetime",
  //                 "x-index": 3,
  //                 "title": "更新时间",
  //                 "type": "number",
  //                 "x-unique": false
  //               }
  //             },
  //             "required": []
  //           },
  //           "x-index": 4
  //         }
  //       }
  //     },
  //     "app_model_obj": {
  //       "type": "object",
  //       "properties": {
  //         "owner": {
  //           "default": "",
  //           "x-system": true,
  //           "x-id": "df20c14",
  //           "name": "owner",
  //           "format": "father-son",
  //           "pattern": "",
  //           "x-index": 4,
  //           "title": "所有人",
  //           "type": "string",
  //           "x-unique": false,
  //           "x-parent": {
  //             "fatherAction": "judge",
  //             "parentViewId": "view-3le757scnk",
  //             "type": "father-son",
  //             "parentDataSourceName": "sys_user"
  //           }
  //         },
  //         "zzmxnv1": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "9f8e0b5",
  //           "format": "related",
  //           "description": "",
  //           "type": "string",
  //           "x-index": 33,
  //           "title": "主子明细nv1",
  //           "x-unique": false,
  //           "x-parent": {
  //             "fatherAction": "related",
  //             "parentViewId": "view-3l50zg9ecg",
  //             "type": "related",
  //             "parentDataSourceName": "sys_department"
  //           }
  //         },
  //         "mjdx": {
  //           "x-keyPath": "",
  //           "x-id": "7d4c503",
  //           "format": "x-enum",
  //           "description": "",
  //           "x-option-name": "qjlx",
  //           "type": "array",
  //           "x-index": 25,
  //           "title": "枚举多选",
  //           "x-unique": false,
  //           "x-required": false,
  //           "x-enum-type": "general-option",
  //           "x-multi-select": true,
  //           "items": {
  //             "type": "string"
  //           }
  //         },
  //         "glgxnv1": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "913c99f",
  //           "format": "father-son",
  //           "description": "",
  //           "type": "string",
  //           "x-index": 29,
  //           "title": "关联关系nv1",
  //           "x-unique": false,
  //           "x-parent": {
  //             "fatherAction": "prompt-not-delete",
  //             "parentViewId": "view-3k6swq2aw0",
  //             "type": "father-son",
  //             "parentDataSourceName": "xs_xe52w7c"
  //           }
  //         },
  //         "szdxszdx": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "a2dd935",
  //           "format": "",
  //           "description": "",
  //           "type": "array",
  //           "x-index": 37,
  //           "title": "数组对象数组对象",
  //           "items": {
  //             "format": "",
  //             "type": "object",
  //             "properties": {
  //               "arr": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "7fc6ddf",
  //                 "format": "",
  //                 "name": "arr",
  //                 "description": "",
  //                 "type": "array",
  //                 "x-index": 2,
  //                 "title": "arr",
  //                 "items": {
  //                   "format": "",
  //                   "type": "object",
  //                   "properties": {
  //                     "name": {
  //                       "x-required": false,
  //                       "x-keyPath": "",
  //                       "x-id": "74bc4f3",
  //                       "format": "",
  //                       "name": "name",
  //                       "description": "",
  //                       "type": "string",
  //                       "x-index": 2,
  //                       "title": "name",
  //                       "x-unique": false
  //                     }
  //                   }
  //                 },
  //                 "x-unique": false,
  //                 "required": []
  //               }
  //             }
  //           },
  //           "x-unique": false,
  //           "required": []
  //         },
  //         "glgx": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "6c622b6",
  //           "format": "father-son",
  //           "description": "",
  //           "type": "string",
  //           "x-index": 27,
  //           "title": "关联关系1v1",
  //           "x-unique": true,
  //           "x-parent": {
  //             "fatherAction": "prompt-not-delete",
  //             "parentViewId": "view-3k6swq2aw0",
  //             "type": "father-son",
  //             "parentDataSourceName": "xs_xe52w7c"
  //           }
  //         },
  //         "sz": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "797fffa",
  //           "format": "",
  //           "description": "",
  //           "type": "array",
  //           "x-index": 15,
  //           "title": "标签_文本数组",
  //           "items": {
  //             "format": "",
  //             "type": "string"
  //           },
  //           "x-unique": false
  //         },
  //         "ah": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-enum-type": "general-option",
  //           "x-id": "b4d8ed7",
  //           "format": "x-enum",
  //           "description": "",
  //           "x-option-name": "ah",
  //           "type": "string",
  //           "x-index": 19,
  //           "title": "爱好_枚举",
  //           "x-multi-select": false,
  //           "x-unique": false
  //         },
  //         "_departmentList": {
  //           "default": "",
  //           "x-system": true,
  //           "x-id": "7b2d4f1",
  //           "format": "",
  //           "name": "_departmentList",
  //           "title": "所属部门",
  //           "type": "array",
  //           "x-index": 7,
  //           "items": {
  //             "type": "string"
  //           },
  //           "x-unique": false
  //         },
  //         "nl_sz": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "7a431c9",
  //           "format": "",
  //           "description": "",
  //           "type": "number",
  //           "x-index": 11,
  //           "title": "年龄_数字",
  //           "x-unique": false
  //         },
  //         "tx_tp": {
  //           "x-image-size": 1048576,
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "b209505",
  //           "format": "x-image",
  //           "description": "",
  //           "x-image-support": [
  //             "image/jpeg"
  //           ],
  //           "type": "string",
  //           "x-index": 21,
  //           "title": "头像_图片",
  //           "x-unique": false
  //         },
  //         "sb": {
  //           "x-keyPath": "",
  //           "x-id": "7b17caa",
  //           "format": "",
  //           "description": "",
  //           "isEnum": false,
  //           "type": "array",
  //           "x-index": 23,
  //           "title": "书本列表",
  //           "list": [
  //             {
  //               "x-keyPath": "",
  //               "x-id": "a4a1d89",
  //               "format": "",
  //               "description": "",
  //               "pId": "7b17caa",
  //               "type": "object",
  //               "x-index": 2,
  //               "title": "书本",
  //               "list": [
  //                 {
  //                   "x-required": false,
  //                   "x-keyPath": "",
  //                   "x-id": "8125d44",
  //                   "format": "",
  //                   "name": "sm",
  //                   "description": "",
  //                   "pId": "a4a1d89",
  //                   "type": "string",
  //                   "x-index": 2,
  //                   "title": "书名",
  //                   "x-unique": false
  //                 }
  //               ],
  //               "x-unique": false,
  //               "required": [],
  //               "x-required": false,
  //               "name": "sb_item",
  //               "properties": {
  //                 "sm": {
  //                   "x-required": false,
  //                   "x-keyPath": "",
  //                   "x-id": "8125d44",
  //                   "format": "",
  //                   "name": "sm",
  //                   "description": "",
  //                   "type": "string",
  //                   "x-index": 2,
  //                   "title": "书名",
  //                   "x-unique": false
  //                 }
  //               }
  //             }
  //           ],
  //           "x-unique": false,
  //           "required": [],
  //           "x-required": false,
  //           "name": "sb",
  //           "items": {
  //             "format": "",
  //             "type": "object",
  //             "properties": {
  //               "sm": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "9f2d0b8",
  //                 "format": "",
  //                 "name": "sm",
  //                 "description": "",
  //                 "type": "string",
  //                 "x-index": 2,
  //                 "title": "书名",
  //                 "x-unique": false
  //               }
  //             }
  //           }
  //         },
  //         "createdAt": {
  //           "default": 0,
  //           "x-system": true,
  //           "x-id": "982c8ec",
  //           "format": "datetime",
  //           "x-index": 2,
  //           "type": "number",
  //           "title": "创建时间",
  //           "x-unique": false
  //         },
  //         "createBy": {
  //           "default": "",
  //           "x-system": true,
  //           "x-id": "25e89cd",
  //           "name": "createBy",
  //           "format": "father-son",
  //           "pattern": "",
  //           "x-index": 5,
  //           "type": "string",
  //           "title": "创建人",
  //           "x-unique": false,
  //           "x-parent": {
  //             "fatherAction": "judge",
  //             "parentViewId": "view-3le757scnk",
  //             "type": "father-son",
  //             "parentDataSourceName": "sys_user"
  //           }
  //         },
  //         "xb_bez": {
  //           "x-required": false,
  //           "default": true,
  //           "x-keyPath": "",
  //           "x-id": "719ae35",
  //           "format": "",
  //           "description": "",
  //           "type": "boolean",
  //           "x-index": 13,
  //           "title": "性别_布尔值",
  //           "x-unique": false
  //         },
  //         "updateBy": {
  //           "default": "",
  //           "x-system": true,
  //           "x-id": "93a079a",
  //           "name": "updateBy",
  //           "format": "father-son",
  //           "pattern": "",
  //           "x-index": 6,
  //           "type": "string",
  //           "title": "修改人",
  //           "x-unique": false,
  //           "x-parent": {
  //             "fatherAction": "judge",
  //             "parentViewId": "view-3le757scnk",
  //             "type": "father-son",
  //             "parentDataSourceName": "sys_user"
  //           }
  //         },
  //         "zfc": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "933aede",
  //           "format": "",
  //           "name": "zfc",
  //           "description": "",
  //           "isEnum": false,
  //           "type": "string",
  //           "x-index": 9,
  //           "title": "姓名_字符串",
  //           "x-unique": false
  //         },
  //         "szdxszyz": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "82a050d",
  //           "format": "",
  //           "description": "",
  //           "type": "array",
  //           "x-index": 35,
  //           "title": "数组对象数组原子",
  //           "items": {
  //             "format": "",
  //             "type": "object",
  //             "properties": {
  //               "arr": {
  //                 "x-required": false,
  //                 "x-keyPath": "",
  //                 "x-id": "80c3e5e",
  //                 "format": "",
  //                 "name": "arr",
  //                 "description": "",
  //                 "type": "array",
  //                 "x-index": 2,
  //                 "title": "arr",
  //                 "items": {
  //                   "format": "",
  //                   "type": "string"
  //                 },
  //                 "x-unique": false
  //               }
  //             }
  //           },
  //           "x-unique": false,
  //           "required": []
  //         },
  //         "_id": {
  //           "default": "",
  //           "x-system": true,
  //           "x-id": "fa33944",
  //           "format": "",
  //           "pattern": "",
  //           "x-index": 1,
  //           "type": "string",
  //           "title": "数据标识",
  //           "x-unique": true
  //         },
  //         "qm_dx": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "6d34e57",
  //           "format": "",
  //           "description": "",
  //           "type": "object",
  //           "x-index": 17,
  //           "title": "全名_对象",
  //           "list": [
  //             {
  //               "x-required": false,
  //               "x-keyPath": "",
  //               "x-id": "b2e444c",
  //               "format": "",
  //               "name": "x",
  //               "description": "",
  //               "pId": "6d34e57",
  //               "type": "string",
  //               "x-index": 2,
  //               "title": "姓",
  //               "x-unique": false
  //             },
  //             {
  //               "x-required": false,
  //               "x-keyPath": "",
  //               "x-id": "a1f97c3",
  //               "format": "",
  //               "name": "m",
  //               "description": "",
  //               "pId": "6d34e57",
  //               "type": "string",
  //               "x-index": 4,
  //               "title": "名_必填",
  //               "x-unique": false
  //             }
  //           ],
  //           "x-unique": false,
  //           "properties": {
  //             "x": {
  //               "x-required": false,
  //               "x-keyPath": "",
  //               "x-id": "b2e444c",
  //               "format": "",
  //               "name": "x",
  //               "description": "",
  //               "type": "string",
  //               "x-index": 2,
  //               "title": "姓",
  //               "x-unique": false
  //             },
  //             "m": {
  //               "x-required": false,
  //               "x-keyPath": "",
  //               "x-id": "a1f97c3",
  //               "format": "",
  //               "name": "m",
  //               "description": "",
  //               "type": "string",
  //               "x-index": 4,
  //               "title": "名_必填",
  //               "x-unique": false
  //             }
  //           },
  //           "required": []
  //         },
  //         "zzmx1v1": {
  //           "x-required": false,
  //           "x-keyPath": "",
  //           "x-id": "7da5de0",
  //           "format": "related",
  //           "description": "",
  //           "type": "string",
  //           "x-index": 31,
  //           "title": "主子明细1v1",
  //           "x-unique": true,
  //           "x-parent": {
  //             "fatherAction": "related",
  //             "parentViewId": "view-3le757scnk",
  //             "type": "related",
  //             "parentDataSourceName": "sys_user"
  //           }
  //         },
  //         "updatedAt": {
  //           "default": 0,
  //           "x-system": true,
  //           "x-id": "7d2b760",
  //           "format": "datetime",
  //           "x-index": 3,
  //           "title": "更新时间",
  //           "type": "number",
  //           "x-unique": false
  //         }
  //       },
  //       "required": []
  //     },
  //     "app_state_arr": {
  //       "type": "array",
  //       "items": {
  //         "type": "object",
  //         "properties": {
  //           "a": {
  //             "type": "number"
  //           }
  //         }
  //       }
  //     },
  //     "app_state_obj": {
  //       "type": "object",
  //       "properties": {
  //         "name": {
  //           "type": "string"
  //         }
  //       }
  //     },
  //     "app_state_number": {
  //       "type": "number"
  //     }
  //   }
  // }
  /**
   * 测试空 enum
   */
  // const jsonschema: any = {
  //   type: 'string',
  //   enum: []
  // }
  /**
   * 测试 $ref
   */
  const jsonschema: any = {
    type: 'object',
    properties: {
      checkedNodes: {
        title: '已选中的节点列表',
        type: 'array',
        items: {
          $id: 'Node',
          type: 'object',
          properties: {
            children: {type: 'array', items: {$ref: 'Node'}},
            disabled: {title: 'disabled', type: 'boolean'}
          }
        }
      }
    }
  }

  let dts = await compile(jsonschema, 'IWeDa', {
    additionalProperties: true,
    bannerComment: '',
    format: false,
    unknownAny: false
  })

  console.log(dts)
  console.log('======================', dts.length)
  let dts1 = dts.replace(/^export interface.*$/m, '')
  console.log(dts1.substring(0, dts1.length - 2))
}

main()
