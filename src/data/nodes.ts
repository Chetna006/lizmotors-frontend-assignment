const nodes = [
  // level 1
  {
    id: "research",
    type: "mindmap",
    data: { label: "Research", background: "#EF476F", color: "#FFFFFF" },
    position: { x: 0, y: 0 },
  },
  {
    id: "planning",
    type: "mindmap",
    data: { label: "Planning", background: "#FFD166", color: "#FFFFFF" },
    position: { x: 0, y: 100 },
  },
  {
    id: "designing",
    type: "mindmap",
    data: { label: "Designing", background: "#04D6A0", color: "#FFFFFF" },
    position: { x: 0, y: 200 },
  },
  {
    id: "manufacturing",
    type: "mindmap",
    data: { label: "Manufacturing", background: "#118AB2", color: "#FFFFFF" },
    position: { x: 0, y: 300 },
  },
  {
    id: "sales-marketing",
    type: "mindmap",
    data: { label: "Sales/Marketing", background: "#063B4C", color: "#FFFFFF" },
    position: { x: 0, y: 400 },
  },

  // level 2
  {
    id: "external",
    type: "output",
    data: {
      label: "External",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 100,
        positiveReviews: 80,
        negativeReviews: 20,
        comments: 5,
      },
      image: "/assets/graph-2.png",
    },
    position: { x: 200, y: -25 }, // same y as research - 25
  },
  {
    id: "internal",
    type: "output",
    data: {
      label: "Internal",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 25 }, // same y as research + 25
  },
  {
    id: "prd",
    type: "output",
    data: {
      label: "PRDs",
      background: "#FFD166",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 75 }, // same y as planning - 25
  },
  {
    id: "specs",
    type: "output",
    data: {
      label: "Specs",
      background: "#FFD166",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 125 }, // same y as planning + 25
  },
  {
    id: "hardware",
    type: "output",
    data: {
      label: "Hardware",
      background: "#04D6A0",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 175 }, // same y as designing - 25
  },
  {
    id: "software",
    type: "output",
    data: {
      label: "Software",
      background: "#04D6A0",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-1.png",
    },
    position: { x: 200, y: 225 }, // same y as designing + 25
  },
  {
    id: "material",
    type: "output",
    data: {
      label: "Material",
      background: "#118AB2",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 275 }, // same y as manufacturing - 25
  },
  {
    id: "production",
    type: "output",
    data: {
      label: "Production",
      background: "#118AB2",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-3.png",
    },
    position: { x: 200, y: 325 }, // same y as manufacturing + 25
  },
  {
    id: "online",
    type: "output",
    data: {
      label: "Online",
      background: "#063B4C",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 375 }, // same y as sales-marketing - 25
  },
  {
    id: "dealership",
    type: "output",
    data: {
      label: "Dealership",
      background: "#063B4C",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 200, y: 425 }, // same y as sales-marketing + 25
  },

  // level 3
  {
    id: "b2c-1",
    type: "output",
    data: {
      label: "B2C",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 400, y: -50 }, // same y as external - 25
  },
  {
    id: "b2c-2",
    type: "output",
    data: {
      label: "B2C",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
    },
    position: { x: 400, y: 0 }, // same y as external + 25
  },

  // level 4
  {
    id: "online-2",
    type: "output",
    data: {
      label: "Online",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-1.png",
    },
    position: { x: 600, y: -125 }, // same y as external + 25
  },
  {
    id: "interview",
    type: "output",
    data: {
      label: "Interview",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-2.png",
    },
    position: { x: 600, y: -75 }, // same y as external + 25
  },
  {
    id: "public-data",
    type: "output",
    data: {
      label: "Public Data",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-3.png",
    },
    position: { x: 600, y: -25 }, // same y as external + 25
  },
  {
    id: "health",
    type: "output",
    data: {
      label: "Health",
      background: "#EF476F",
      color: "#FFFFFF",
      tooltipData: {
        totalReviews: 80,
        positiveReviews: 45,
        negativeReviews: 25,
        comments: 3,
      },
      image: "/assets/graph-1.png",
    },
    position: { x: 600, y: 25 }, // same y as external + 25
  },
];

const edges = [
  {
    id: "1",
    source: "research",
    target: "external",
  },
  {
    id: "2",
    source: "research",
    target: "internal",
  },
  {
    id: "3",
    source: "planning",
    target: "prd",
  },
  {
    id: "4",
    source: "planning",
    target: "specs",
  },
  {
    id: "5",
    source: "designing",
    target: "hardware",
  },
  {
    id: "6",
    source: "designing",
    target: "software",
  },
  {
    id: "7",
    source: "manufacturing",
    target: "material",
  },
  {
    id: "8",
    source: "manufacturing",
    target: "production",
  },
  {
    id: "9",
    source: "sales-marketing",
    target: "online",
  },
  {
    id: "10",
    source: "sales-marketing",
    target: "dealership",
  },
  {
    id: "11",
    source: "external",
    target: "b2c-1",
  },
  {
    id: "12",
    source: "external",
    target: "b2c-2",
  },

  // level 3 -> 4
  {
    id: "13",
    source: "b2c-1",
    target: "online-2",
  },
  {
    id: "14",
    source: "b2c-1",
    target: "interview",
  },
  {
    id: "15",
    source: "b2c-1",
    target: "public-data",
  },
  {
    id: "16",
    source: "b2c-1",
    target: "health",
  },
];

export { nodes, edges };
