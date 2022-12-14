const tableData = {
  raw_related_data: [
    {
      keyword: "guide",
      intent: "0",
      volume: "33100",
      keyword_difficulty: "11",
      cpc: "0.64",
      competetion: "0.01",
      numberOfResult: "14720000000",
    },
    {
      keyword: "search engine",
      intent: "2",
      volume: "33100",
      keyword_difficulty: "33",
      cpc: "0.27",
      competetion: "0.16",
      numberOfResult: "2080000000",
    },
    {
      keyword: "search engine optimization",
      intent: "0",
      volume: "33100",
      keyword_difficulty: "28",
      cpc: "0.27",
      competetion: "0.16",
      numberOfResult: "2080000000",
    },
    {
      keyword: "seo company",
      intent: "0",
      volume: "27100",
      keyword_difficulty: "18",
      cpc: "0.22",
      competetion: "0.12",
      numberOfResult: "339000000",
    },
    {
      keyword: "seo services",
      intent: "0",
      volume: "27100",
      keyword_difficulty: "21",
      cpc: "0.09",
      competetion: "0.27",
      numberOfResult: "347000000",
    },
  ],

  raw_broadmatch_data: [
    {
      keyword: "shopping in barcelona",
      intent: "0",
      volume: "480",
      keyword_difficulty: "46",
      cpc: "0.24",
      competetion: "0.12",
      numberOfResult: "313000000",
    },
    {
      keyword: "how to open a weed shop in barcelona",
      intent: "1",
      volume: "320",
      keyword_difficulty: "12",
      cpc: "0",
      competetion: "0",
      numberOfResult: "4800000",
    },
    {
      keyword: "best shopping in barcelona",
      intent: "0",
      volume: "260",
      keyword_difficulty: "45",
      cpc: "0",
      competetion: "0.05",
      numberOfResult: "314000000",
    },
    {
      keyword: "shopping in barcelona spain",
      intent: "0",
      volume: "140",
      keyword_difficulty: "44",
      cpc: "0.47",
      competetion: "0.06",
      numberOfResult: "87900000",
    },

    {
      keyword: "best coffee shops in barcelona",
      intent: "2",
      volume: "90",
      keyword_difficulty: "26",
      cpc: "0",
      competetion: "0.01",
      numberOfResult: "22100000",
    },
    {
      keyword: "luxury shopping in barcelona",
      intent: "0",
      volume: "70",
      keyword_difficulty: "24",
      cpc: "0",
      competetion: "0.02",
      numberOfResult: "19800000",
    },
    {
      keyword: "tattoo shops in barcelona spain",
      intent: "0",
      volume: "70",
      keyword_difficulty: "23",
      cpc: "0",
      competetion: "0.04",
      numberOfResult: "4380000",
    },
    {
      keyword: "where to shop in barcelona",
      intent: "0",
      volume: "70",
      keyword_difficulty: "36",
      cpc: "0",
      competetion: "0.02",
      numberOfResult: "250000000",
    },
    {
      keyword: "best places to shop in barcelona",
      intent: "0",
      volume: "40",
      keyword_difficulty: "42",
      cpc: "0",
      competetion: "0.03",
      numberOfResult: "0",
    },
    {
      keyword: "is shopping cheap in barcelona",
      intent: "3",
      volume: "40",
      keyword_difficulty: "36",
      cpc: "0",
      competetion: "0",
      numberOfResult: "21500000",
    },
  ],

  raw_question_data: [
    {
      keyword: "is it expensive to shop",
      intent: "0",
      volume: "33100",
      keyword_difficulty: "11",
      cpc: "0.64",
      competetion: "0.01",
      numberOfResult: "14720000000",
    },
    {
      keyword: "cheap things in barcelona",
      intent: "1",
      volume: "33100",
      keyword_difficulty: "33",
      cpc: "0.27",
      competetion: "0.16",
      numberOfResult: "2080000000",
    },
    {
      keyword: "costliest accessories",
      intent: "0",
      volume: "33100",
      keyword_difficulty: "28",
      cpc: "0.14",
      competetion: "0.27",
      numberOfResult: "239000000",
    },
    {
      keyword: "trending items",
      intent: "0",
      volume: "27100",
      keyword_difficulty: "18",
      cpc: "0.22",
      competetion: "0.12",
      numberOfResult: "339000000",
    },

    {
      keyword: "jewellery",
      intent: "2",
      volume: "27100",
      keyword_difficulty: "21",
      cpc: "0.09",
      competetion: "0.27",
      numberOfResult: "347000000",
    },
  ],
};

const columnNames = [
  {
    Header: "Keyword",
    accessor: "keyword",
  },

  {
    Header: "Intent",
    accessor: "intent",
    Cell: (props) => {
      return (
        <p style={{ color: props.value === "SUCCESS" ? "green" : "red" }}>
          {props.value}
        </p>
      );
    },
  },
  {
    Header: "Search Volume",
    accessor: "volume",
  },
  {
    Header: "Keyword Difficulty",
    accessor: "keyword_difficulty",
  },

  {
    Header: "CPC",
    accessor: "cpc",
  },
  {
    Header: " Competetion",
    accessor: "competetion",
  },
  {
    Header: "Number of Results",
    accessor: "numberOfResult",
  },
];

export { tableData, columnNames };

// {
//     "topic": "shopping in barcelona",
//     "country": "us",
//     "phrase_search": "fullsearch",

//     "request_id": "74bf439b-ffc7-493a-b758-1e37c80c5c29",
//     "status": 200,
//     "created_date": "2022-11-19T05:39:27.001544"
//   }
