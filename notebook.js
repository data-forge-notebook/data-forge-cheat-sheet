const baseName = "data-forge-cheat-sheet";
const notebook = {
    "version": 1,
    "sheet": {
        "id": "0dffaa50-95d2-11e8-beb3-ed1734412cc1",
        "language": "javascript",
        "cells": [
            {
                "id": "186c4660-95d2-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "# Data-Forge cheat sheet\r\n\r\nSnippets of JS code that show how to work with data using [Data-Forge](http://www.data-forge-js.com/).\r\n\r\nFrom the book [Data Wrangling with JavaScript](http://bit.ly/2t2cJu2)\r\n\r\nFor more in-depth help please see the [The Guide](https://github.com/data-forge/data-forge-ts/blob/master/docs/guide.md) or [the API docs](https://data-forge.github.io/data-forge-ts/).",
                "lastEvaluationDate": "2018-10-31T08:52:07.390+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "3af70c60-95d2-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "## Loading data into a dataframe\r\n\r\nLoad data from memory into a Data-Forge [`DataFrame`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html).",
                "lastEvaluationDate": "2018-10-31T08:52:07.391+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "5117b8a0-95d2-11e8-beb3-ed1734412cc1",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\n\r\nlet data = [{ A: 1, B: 10 }, { A: 2, B: 20 }, { A: 3, B: 30 }];\r\nlet df = new dataForge.DataFrame(data);\r\ndisplay(df);",
                "lastEvaluationDate": "2019-04-25T11:13:02.340+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "A",
                                        "B"
                                    ],
                                    "columns": {
                                        "A": "number",
                                        "B": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2
                                        ]
                                    },
                                    "values": [
                                        {
                                            "A": 1,
                                            "B": 10,
                                            "__index__": 0
                                        },
                                        {
                                            "A": 2,
                                            "B": 20,
                                            "__index__": 1
                                        },
                                        {
                                            "A": 3,
                                            "B": 30,
                                            "__index__": 2
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "893569d0-95d2-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "## Loading CSV files\r\n\r\nLoad data from a CSV file using [`readFile`](https://data-forge.github.io/data-forge-ts/index.html#readfile) and [`parseCSV`](https://data-forge.github.io/data-forge-ts/interfaces/iasyncfilereader.html#parsecsv).",
                "lastEvaluationDate": "2018-10-31T08:52:07.396+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "92266260-95d2-11e8-beb3-ed1734412cc1",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.csv\", { dynamicTyping: true })\r\n    .parseCSV();\r\ndisplay(df.head(5)); // Preview first 5 rows.",
                "lastEvaluationDate": "2019-04-25T11:13:02.345+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "string",
                                        "Height (in)": "string",
                                        "Weight (lbs)": "string"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": "41",
                                            "Height (in)": "74",
                                            "Weight (lbs)": "170",
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": "42",
                                            "Height (in)": "68",
                                            "Weight (lbs)": "166",
                                            "__index__": 1
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": "32",
                                            "Height (in)": "70",
                                            "Weight (lbs)": "155",
                                            "__index__": 2
                                        },
                                        {
                                            "Name": "Dave",
                                            "Sex": "M",
                                            "Age": "39",
                                            "Height (in)": "72",
                                            "Weight (lbs)": "167",
                                            "__index__": 3
                                        },
                                        {
                                            "Name": "Elly",
                                            "Sex": "F",
                                            "Age": "30",
                                            "Height (in)": "66",
                                            "Weight (lbs)": "124",
                                            "__index__": 4
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "5c89a4d0-95d4-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "## Loading JSON files\r\n\r\nLoad data from JSON files using [`readFile`](https://data-forge.github.io/data-forge-ts/index.html#readfile) and [`parseJSON`](https://data-forge.github.io/data-forge-ts/interfaces/iasyncfilereader.html#parsejson).",
                "lastEvaluationDate": "2018-10-31T08:52:07.401+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "720c1540-95d4-11e8-beb3-ed1734412cc1",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.json\")\r\n    .parseJSON();\r\ndisplay(df.tail(5)); // Preview last 5 rows.",
                "lastEvaluationDate": "2019-04-25T11:13:02.350+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number",
                                        "Height (in)": "number",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            13,
                                            14,
                                            15,
                                            16,
                                            17
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Neil",
                                            "Sex": "M",
                                            "Age": 36,
                                            "Height (in)": 75,
                                            "Weight (lbs)": 160,
                                            "__index__": 13
                                        },
                                        {
                                            "Name": "Omar",
                                            "Sex": "M",
                                            "Age": 38,
                                            "Height (in)": 70,
                                            "Weight (lbs)": 145,
                                            "__index__": 14
                                        },
                                        {
                                            "Name": "Page",
                                            "Sex": "F",
                                            "Age": 31,
                                            "Height (in)": 67,
                                            "Weight (lbs)": 135,
                                            "__index__": 15
                                        },
                                        {
                                            "Name": "Quin",
                                            "Sex": "M",
                                            "Age": 29,
                                            "Height (in)": 71,
                                            "Weight (lbs)": 176,
                                            "__index__": 16
                                        },
                                        {
                                            "Name": "Ruth",
                                            "Sex": "F",
                                            "Age": 28,
                                            "Height (in)": 65,
                                            "Weight (lbs)": 131,
                                            "__index__": 17
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "dd559920-95d4-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "## Data transformation\r\n\r\nTransform or rewrite your data set using the [`select`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#select) function (similar to JavaScript's `map` function):\r\n\r\nExample: Transforming the value of the Height column from inches to centimetres.",
                "lastEvaluationDate": "2018-10-31T08:52:07.413+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "f46fe7a0-95d4-11e8-beb3-ed1734412cc1",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.csv\", { dynamicTyping: true })\r\n    .parseCSV();\r\n\r\nlet transformed = df.select(row => {                        // Transform the dataframe, converting units to the metric system.\r\n        const clone = Object.assign({}, row);               // Clone the original so that we don't modify source data.\r\n        clone[\"Height (cm)\"] = clone[\"Height (in)\"] * 2.54; // Convert from inches to centimetres.\r\n        return clone;\r\n    });\r\n\r\ndisplay(transformed.head(5));",
                "lastEvaluationDate": "2019-04-25T11:13:02.354+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)",
                                        "Height (cm)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "string",
                                        "Height (in)": "string",
                                        "Weight (lbs)": "string",
                                        "Height (cm)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": "41",
                                            "Height (in)": "74",
                                            "Weight (lbs)": "170",
                                            "Height (cm)": 187.96,
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": "42",
                                            "Height (in)": "68",
                                            "Weight (lbs)": "166",
                                            "Height (cm)": 172.72,
                                            "__index__": 1
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": "32",
                                            "Height (in)": "70",
                                            "Weight (lbs)": "155",
                                            "Height (cm)": 177.8,
                                            "__index__": 2
                                        },
                                        {
                                            "Name": "Dave",
                                            "Sex": "M",
                                            "Age": "39",
                                            "Height (in)": "72",
                                            "Weight (lbs)": "167",
                                            "Height (cm)": 182.88,
                                            "__index__": 3
                                        },
                                        {
                                            "Name": "Elly",
                                            "Sex": "F",
                                            "Age": "30",
                                            "Height (in)": "66",
                                            "Weight (lbs)": "124",
                                            "Height (cm)": 167.64000000000001,
                                            "__index__": 4
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "61fe8410-95d6-11e8-beb3-ed1734412cc1",
                "cellType": "markdown",
                "code": "## Data filtering\r\n\r\nFilter data with the the [`where`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#where) function (similar to JavaScript's `filter` function).\r\n\r\nExample: Filtering for tall people.",
                "lastEvaluationDate": "2018-10-31T08:52:07.417+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "b0004db0-95d6-11e8-beb3-ed1734412cc1",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.json\")\r\n    .parseJSON();\r\n\r\nlet filtered = df.where(row => row[\"Height (in)\"] >= 70); // Filter for very tall people.\r\n\r\ndisplay(filtered);",
                "lastEvaluationDate": "2019-04-25T11:13:02.359+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number",
                                        "Height (in)": "number",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            2,
                                            3,
                                            7,
                                            8,
                                            11,
                                            13,
                                            14,
                                            16
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": 41,
                                            "Height (in)": 74,
                                            "Weight (lbs)": 170,
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": 32,
                                            "Height (in)": 70,
                                            "Weight (lbs)": 155,
                                            "__index__": 2
                                        },
                                        {
                                            "Name": "Dave",
                                            "Sex": "M",
                                            "Age": 39,
                                            "Height (in)": 72,
                                            "Weight (lbs)": 167,
                                            "__index__": 3
                                        },
                                        {
                                            "Name": "Hank",
                                            "Sex": "M",
                                            "Age": 30,
                                            "Height (in)": 71,
                                            "Weight (lbs)": 158,
                                            "__index__": 7
                                        },
                                        {
                                            "Name": "Ivan",
                                            "Sex": "M",
                                            "Age": 53,
                                            "Height (in)": 72,
                                            "Weight (lbs)": 175,
                                            "__index__": 8
                                        },
                                        {
                                            "Name": "Luke",
                                            "Sex": "M",
                                            "Age": 34,
                                            "Height (in)": 72,
                                            "Weight (lbs)": 163,
                                            "__index__": 11
                                        },
                                        {
                                            "Name": "Neil",
                                            "Sex": "M",
                                            "Age": 36,
                                            "Height (in)": 75,
                                            "Weight (lbs)": 160,
                                            "__index__": 13
                                        },
                                        {
                                            "Name": "Omar",
                                            "Sex": "M",
                                            "Age": 38,
                                            "Height (in)": 70,
                                            "Weight (lbs)": 145,
                                            "__index__": 14
                                        },
                                        {
                                            "Name": "Quin",
                                            "Sex": "M",
                                            "Age": 29,
                                            "Height (in)": 71,
                                            "Weight (lbs)": 176,
                                            "__index__": 16
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "3d7a5e00-96a5-11e8-991f-fb26465f6522",
                "cellType": "markdown",
                "code": "## Working with series (columns)",
                "lastEvaluationDate": "2018-10-31T08:52:07.423+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "47a5ab50-96a5-11e8-991f-fb26465f6522",
                "cellType": "markdown",
                "code": "### Removing one or more series\r\n\r\nExample: Removing the Height and Weight columns using the [`dropSeries`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#dropseries) function.",
                "lastEvaluationDate": "2018-10-31T08:52:07.423+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "4d3131c0-96a5-11e8-991f-fb26465f6522",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\n\r\nlet modified = df.dropSeries([\"Height (in)\", \"Weight (lbs)\"]);\r\n\r\ndisplay(modified.head(3));",
                "lastEvaluationDate": "2019-04-25T11:13:02.364+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": 41,
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": 42,
                                            "__index__": 1
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": 32,
                                            "__index__": 2
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "518442c0-96a6-11e8-928f-25163f41bb46",
                "cellType": "markdown",
                "code": "### Renaming one or more series\r\n\r\nExample: Renaming the Height and Weight columns using the [`renameSeries`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#renameseries) function so that the field names don't specify the unit of measurement.",
                "lastEvaluationDate": "2018-10-31T08:52:07.428+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "56b10760-96a6-11e8-928f-25163f41bb46",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\n\r\nlet modified = df.renameSeries({\r\n    \"Height (in)\": \"Height\",\r\n    \"Weight (lbs)\": \"Weight\",\r\n});\r\n\r\ndisplay(modified.head(3));",
                "lastEvaluationDate": "2019-04-25T11:13:02.368+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height",
                                        "Weight"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number",
                                        "Height": "number",
                                        "Weight": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": 41,
                                            "Height": 74,
                                            "Weight": 170,
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": 42,
                                            "Height": 68,
                                            "Weight": 166,
                                            "__index__": 1
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": 32,
                                            "Height": 70,
                                            "Weight": 155,
                                            "__index__": 2
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "8a49a5a0-96a6-11e8-928f-25163f41bb46",
                "cellType": "markdown",
                "code": "### Extracting, transforming and merging a series\r\n\r\nExample: converting the Height column from inches to centimeters.",
                "lastEvaluationDate": "2018-10-31T08:52:07.433+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "954b55c0-96a6-11e8-928f-25163f41bb46",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\ndf = df.renameSeries({ \"Height (in)\": \"Height\"})    // Rename series.\r\n    .setIndex(\"Name\");                              // We need an index in order to merge data.\r\n\r\nlet heights = df.getSeries(\"Height\");\r\n\r\n// You can also do this:\r\n// let heights = df.deflate(row => row.Height);\r\n\r\nheights = heights.select(value => value * 2.54); // Convert from inches to centimeters.\r\n\r\ndf = df.withSeries(\"Height\", heights); // Merge the modified series into the source data set.\r\n\r\ndisplay(df.head(3));",
                "lastEvaluationDate": "2019-04-25T11:13:02.372+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number",
                                        "Height": "number",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "string",
                                        "values": [
                                            "Alex",
                                            "Bert",
                                            "Carl"
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": 41,
                                            "Weight (lbs)": 170,
                                            "Height": 187.96,
                                            "__index__": "Alex"
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": 42,
                                            "Weight (lbs)": 166,
                                            "Height": 172.72,
                                            "__index__": "Bert"
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": 32,
                                            "Weight (lbs)": 155,
                                            "Height": 177.8,
                                            "__index__": "Carl"
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "7b7489e0-96a7-11e8-928f-25163f41bb46",
                "cellType": "markdown",
                "code": "### A simpler way to transform a series\r\n\r\nExample: Using the DataFrame [`transformSeries`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#transformseries) function makes the previous example a bit simpler.",
                "lastEvaluationDate": "2018-10-31T08:52:07.438+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "7eceb160-96a7-11e8-928f-25163f41bb46",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\ndf = df.renameSeries({ \"Height (in)\": \"Height\" });    // Rename series.\r\n\r\ndf = df.transformSeries({ Height: value => value * 2.54 }); // Convert Height from inches to centimeters.\r\n\r\ndisplay(df.head(3));",
                "lastEvaluationDate": "2019-04-25T11:13:02.377+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Name": "string",
                                        "Sex": "string",
                                        "Age": "number",
                                        "Height": "number",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Age": 41,
                                            "Weight (lbs)": 170,
                                            "Height": 187.96,
                                            "__index__": 0
                                        },
                                        {
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Age": 42,
                                            "Weight (lbs)": 166,
                                            "Height": 172.72,
                                            "__index__": 1
                                        },
                                        {
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Age": 32,
                                            "Weight (lbs)": 155,
                                            "Height": 177.8,
                                            "__index__": 2
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "b4e261c0-96a7-11e8-928f-25163f41bb46",
                "cellType": "markdown",
                "code": "## Group and summarize\r\n\r\nWe can use the [`groupBy`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#groupby) function to group our data set and then boil each group down to a summary.\r\n\r\nExample: Getting the average height and weight for male and female groups.",
                "lastEvaluationDate": "2018-10-31T08:52:07.443+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "d8e3e940-96a7-11e8-928f-25163f41bb46",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\n\r\ndf = df.renameSeries({\r\n    \"Height (in)\": \"Height\",\r\n    \"Weight (lbs)\": \"Weight\",\r\n});\r\n\r\nlet summary = df.groupBy(row => row.Sex) // Sort the data set into groups. This returns a series of groups.\r\n    .select(group => {     // Transform each group into a summary.\r\n        return {\r\n            Sex: group.first().Sex,\r\n            Count: group.count(),\r\n            Height: group.deflate(row => row.Height).average(),\r\n            Weight: group.deflate(row => row.Weight).average(),\r\n        };\r\n    })\r\n    .inflate(); // Inflate the series to a dataframe (groupBy returns a series);\r\n\r\ndisplay(summary);",
                "lastEvaluationDate": "2019-04-25T11:13:02.381+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Sex",
                                        "Count",
                                        "Height",
                                        "Weight"
                                    ],
                                    "columns": {
                                        "Sex": "string",
                                        "Count": "number",
                                        "Height": "number",
                                        "Weight": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Sex": "M",
                                            "Count": 11,
                                            "Height": 71.27272727272727,
                                            "Weight": 161.63636363636363,
                                            "__index__": 0
                                        },
                                        {
                                            "Sex": "F",
                                            "Count": 7,
                                            "Height": 65.57142857142857,
                                            "Weight": 123.28571428571429,
                                            "__index__": 1
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "3e86e4a0-96a8-11e8-928f-25163f41bb46",
                "cellType": "markdown",
                "code": "## Aggregation\r\n\r\nWe can use the [`aggregate`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#aggregate) function (like the JavaScript `reduce` function) to boil our entire data set down to a simple summary.\r\n\r\nExample: Get the average height and weight for the entire group.",
                "lastEvaluationDate": "2018-10-31T08:52:07.448+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "5cfc9790-96a8-11e8-928f-25163f41bb46",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge.readFile(\"./example.json\").parseJSON();\r\n\r\ndf = df.renameSeries({\r\n    \"Height (in)\": \"Height\",\r\n    \"Weight (lbs)\": \"Weight\",\r\n});\r\n\r\nlet summary = df.aggregate((agg, row) => ({\r\n    Height: (agg.Height + row.Height) / 2,\r\n    Weight: (agg.Weight + row.Weight) / 2,\r\n}));\r\n\r\ndisplay(summary);",
                "lastEvaluationDate": "2019-04-25T11:13:02.386+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "Height": 67.41633605957031,
                                    "Weight": 144.37367248535156
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ],
                "errors": []
            },
            {
                "id": "6d4e17f0-9909-11e8-a137-ad9568bc5ad7",
                "cellType": "markdown",
                "code": "## Save CSV files\r\n\r\nSave your modified data to a CSV file using functions [`asCSV`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#ascsv) and [`writeFile`](https://data-forge.github.io/data-forge-ts/interfaces/icsvserializer.html#writefile).",
                "lastEvaluationDate": "2018-10-31T08:52:07.455+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "8df68960-9909-11e8-a137-ad9568bc5ad7",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.csv\", { dynamicTyping: true })\r\n    .parseCSV();\r\n\r\nlet transformed = df.select(row => { // Transform data.\r\n    const clone = Object.assign({}, row);\r\n    clone[\"Height (cm)\"] = clone[\"Height (in)\"] * 2.54;\r\n    return clone;\r\n});\r\n\r\nawait df.asCSV().writeFile(\"./transformed.csv\"); // Save CSV file.",
                "lastEvaluationDate": "2019-04-25T11:13:02.393+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "11c22920-990a-11e8-a137-ad9568bc5ad7",
                "cellType": "markdown",
                "code": "## Save JSON files\r\n\r\nSave your modified data to a JSON file using function [`asJSON`](https://data-forge.github.io/data-forge-ts/classes/dataframe.html#asjson) and [`writeFile`](https://data-forge.github.io/data-forge-ts/interfaces/ijsonserializer.html#writefile).",
                "lastEvaluationDate": "2018-10-31T08:52:07.459+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "2bc19630-990a-11e8-a137-ad9568bc5ad7",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\n\r\nlet df = await dataForge\r\n    .readFile(\"./example.json\")\r\n    .parseJSON();\r\n\r\nlet transformed = df.select(row => { // Transform data.\r\n    const clone = Object.assign({}, row);\r\n    clone[\"Height (cm)\"] = clone[\"Height (in)\"] * 2.54;\r\n    return clone;\r\n});\r\n\r\nawait df.asJSON().writeFile(\"./transformed.json\"); // Save JSON file.",
                "lastEvaluationDate": "2019-04-25T11:13:02.397+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "821cdcc0-dc89-11e8-9ed7-adb030f971aa",
                "cellType": "markdown",
                "code": "## Getting data from a REST API\r\n\r\nUse the [`axios` module](https://www.npmjs.com/package/axios) to retreive data from a REST API (with data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)).",
                "lastEvaluationDate": "2018-10-31T08:52:07.463+10:00",
                "output": [],
                "errors": []
            },
            {
                "id": "89cec5a0-dc89-11e8-9ed7-adb030f971aa",
                "cellType": "code",
                "cellScope": "local",
                "code": "const dataForge = require('data-forge');\r\nrequire('data-forge-fs');\r\nconst axios = require('axios');\r\n\r\nconst response = await axios(\"https://jsonplaceholder.typicode.com/todos\");\r\nconst data = new dataForge.DataFrame(response.data);\r\ndisplay(data.head(5));",
                "lastEvaluationDate": "2019-04-25T11:13:02.400+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "userId",
                                        "id",
                                        "title",
                                        "completed"
                                    ],
                                    "columns": {
                                        "userId": "number",
                                        "id": "number",
                                        "title": "string",
                                        "completed": "boolean"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ]
                                    },
                                    "values": [
                                        {
                                            "userId": 1,
                                            "id": 1,
                                            "title": "delectus aut autem",
                                            "completed": false,
                                            "__index__": 0
                                        },
                                        {
                                            "userId": 1,
                                            "id": 2,
                                            "title": "quis ut nam facilis et officia qui",
                                            "completed": false,
                                            "__index__": 1
                                        },
                                        {
                                            "userId": 1,
                                            "id": 3,
                                            "title": "fugiat veniam minus",
                                            "completed": false,
                                            "__index__": 2
                                        },
                                        {
                                            "userId": 1,
                                            "id": 4,
                                            "title": "et porro tempora",
                                            "completed": true,
                                            "__index__": 3
                                        },
                                        {
                                            "userId": 1,
                                            "id": 5,
                                            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                                            "completed": false,
                                            "__index__": 4
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ],
                "errors": []
            }
        ]
    }
};