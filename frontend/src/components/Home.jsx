import React from "react";
import img1 from "../images/ai_section2_new1.png";
import img2 from "../images/ai_section2_new2.png";
import img3 from "../images/ai_section2_new3.png";
const Home = () => {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     age: 30,
  //     occupation: "Software Engineer",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Doe",
  //     age: 25,
  //     occupation: "Web Developer",
  //   },
  // ]);

  // const columns = [
  //   {
  //     Header: "ID",
  //     accessor: "id",
  //     width: 50,
  //   },
  //   {
  //     Header: "Name",
  //     accessor: "name",
  //   },
  //   {
  //     Header: "Age",
  //     accessor: "age",
  //   },
  //   {
  //     Header: "Occupation",
  //     accessor: "occupation",
  //   },
  // ];
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Our Free Summarizing Tool capture your key points in a flash
            </h1>
            <p className="mt-4 text-gray-600">
              Wordvice's free text summarizer sums up articles, essays, papers,
              and other documents down to their main points with the click of a
              button. Our AI tech summarizes text using natural language
              processing, identifying crucial content while retaining your
              original meaning and context. Capture your meaning in fewer words
              with our instant summarizing tool.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Key Features of our Text Summarizer
            </h1>
            {/* <ul className="mt-4 list-disc text-gray-600">
              <li>AI summarizer</li>
              <li>Summarize</li>
              <li>100% free</li>
              <li>Extracts key points and generates summary</li>
              <li>Get a summary for any essay, article, or document</li>
              <li>Simply register to begin using our summarizer</li>
            </ul> */}
            {/* <table className="table-auto w-full border border-collapse border-gray-200 rounded-lg">
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-900">
                    AI summarizer
                  </td>
                  <td className="border-gray-200 px-4 py-2">
                    Extracts key points and generates summary
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-900">
                    Summarize
                  </td>
                  <td className="border-gray-200 px-4 py-2">
                    Get a summary for any essay, article, or document
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-900">
                    100% free
                  </td>
                  <td className="border-gray-200 px-4 py-2">
                    Simply register to begin using our summarizer
                  </td>
                </tr>
              </tbody>
            </table> */}
            {/* <Table
              data={data}
              columns={columns}
              className="table-auto w-full border border-collapse border-gray-200 rounded-lg"
            >
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    {columns.map((column, index) => (
                      <td key={index} className="border-gray-200 px-4 py-2">
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table> */}
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-5">
              <img
                src={img1}
                alt="img1"
                className="w-full h-full object-cover"
              />
              <h1 className="font-semibold  ">
                Real-time grammar and typo corrections increase the accuracy of
                your writings.
              </h1>
              <p>
                Wordvice AI Proofreader improves your vocabulary and enhances
                your style through and grammar and typo checks.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img2}
                alt="img2"
                className="w-full h-full object-cover"
              />
              <h1>
                Real-time grammar and typo corrections increase the accuracy of
                your writings.
              </h1>
              <p>
                Wordvice AI Proofreader improves your vocabulary and enhances
                your style through and grammar and typo checks.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img3}
                alt="img3"
                className="w-full h-full object-cover"
              />
              <h1>
                Real-time grammar and typo corrections increase the accuracy of
                your writings.
              </h1>
              <p>
                Wordvice AI Proofreader improves your vocabulary and enhances
                your style through and grammar and typo checks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
