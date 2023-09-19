import { useState } from 'react';
import Papa from 'papaparse';
import categories from '../../categories.json';

function CsvUploader() {
  const [parsedData, setParsedData] = useState([]);
  const [values, setValues] = useState([]);
  const [category, setCategory] = useState('coffee');
  const [sortIndex, setSortIndex] = useState(0);

  const tableHeads = ['date', 'who', 'how much'];

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const shortenedArray = [];
        results.data.map((d) => {
          //rowsArray.push(Object.keys(d));
          //valuesArray.push(Object.values(d));
          //mobilePayArray.push([d.Date, d.Who, d.Amount.slice(0, -3)]);
          //nordeaArray
          shortenedArray.push([
            d.Bogføringsdato,
            d.Beskrivelse.split('Den')[0],
            d.Beløb.slice(0, -3),
          ]);
        });
        setParsedData(results.data);
        setValues(shortenedArray);
      },
    });
  };

  //listing all the names and occurwncies
  const names = values.map((name) => [name[1]]);
  const counts = {};
  for (const num of names) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const entries = Object.entries(counts);
  const largeEntries = entries.filter((entry) => entry[1] > 0);

  const groupByName = (name) => {
    const chosen = values.filter((array) => array.includes(name));
    return chosen;
  };

  const categoryArray = [];
  categories[category].map((entry) => {
    values.map((value) => {
      value[1].includes(entry) && categoryArray.push(value);
    });
  });

  const tables = largeEntries.map((entry) => groupByName(entry[0]));

  const sumArray = (array) => {
    const numberArray = array.map((row) => Number(row[2]));
    return numberArray.reduce((a, b) => a + b, 0);
  };

  const toMonth = (string) => {
    return Number(string.slice(5).slice(0, -3));
  };

  const months = [...Array(12).keys()];

  const categorized = [];
  const onlyCategoryNames = [];
  const onlyTransactionNames = largeEntries.map((entry) => entry[0]);
  Object.values(categories).map((entry) => {
    entry.map((word) => onlyCategoryNames.push(word));
  });

  onlyTransactionNames.map((transaction) => {
    onlyCategoryNames.map((name) => {
      transaction.includes(name) && categorized.push(transaction);
    });
  });

  var uncategorized = onlyTransactionNames.filter(function (word) {
    return !categorized.includes(word);
  });
  console.log('uncategorized', uncategorized);

  return (
    <div>
      <div className={`container blog-text ${tables}`}>
        {/* File Uploader */}
        <label htmlFor='file-upload' className='custom-file-upload'>
          Choose file
        </label>
        <input
          id='file-upload'
          type='file'
          name='file'
          onChange={changeHandler}
          accept='.csv'
          style={{ display: 'block' }}
        />

        <br />
        <div>
          {Object.keys(categories).map((c, i) => (
            <button key={i} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>

        <h3>all {category}</h3>
        <p style={{ marginTop: 8, marginBottom: 40 }}>
          sort by:{' '}
          {tableHeads.map((head, index) => (
            <button onClick={() => setSortIndex(index)}>{head} </button>
          ))}
        </p>

        <div>
          <div className='flex-between'>
            {months.map((month) => {
              const monthArray = [];
              categoryArray.map(
                (item) =>
                  toMonth(item[0]) === month + 1 && monthArray.push(item)
              );
              return (
                <div
                  style={{
                    backgroundColor: 'blue',
                    height: Math.abs(sumArray(monthArray) / 20),
                  }}
                >
                  <p style={{ padding: 0, margin: 0, marginTop: -26 }}>
                    {sumArray(monthArray)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {tableHeads.map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categoryArray
              .sort((a, b) => b[sortIndex].localeCompare(a[sortIndex]))
              .map((row, index) => (
                <tr key={index}>
                  {row.map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <h4>{sumArray(categoryArray)}</h4>

        {/* {tables.map((table) => {
        return (
          <>
            <table>
              <thead>
                <tr>
                  {tableHeads.map((head) => (
                    <th>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((rows, index) => {
                  return (
                    <tr key={index}>
                      {rows.map((val) => {
                        return <td>{val}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p style={{ marginTop: -24 }}>total: {sumArray(table)}</p>
          </>
        );
      })} */}
      </div>
    </div>
  );
}

export default CsvUploader;
