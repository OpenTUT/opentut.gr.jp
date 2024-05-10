interface ListItem {
  id: number;
  text: string;
  subItems?: ListItem[];
}

const LTItems: ListItem[] = [
  { id: 1, text: "Node.js + WebSocketでピクトチャットをつくる - 昨日" },
  { id: 2, text: "TUTilityの構造 - りn" },
];

const WipItems: ListItem[] = [
  { id: 1, text: "Reactチュートリアル" },
  {
    id: 2, text: "構内マップの作成", subItems: [
      { id: 21, text: "現在地の表示" },
      { id: 22, text: "建物や地名を柔軟に表示" }
    ]
  }
];

function Members() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-5 py-10">
        <main>
          <section id="about" className="p-4 bg-white shadow-md mb-5 mx-2 border-2 border-t-tut-red">
            <h2 className="text-2xl font-bold mb-3">部員の活動</h2>
            <p>部員がLT会で発表した技術について紹介しています。</p><br />
            <p>勉強会や、進行中のプロジェクトについての紹介もしています。</p><br /><br /><br />

            <h3 className="text-xl font-bold mb-3">LT会</h3>
            <ul className="list-disc pl-5">
              {LTItems.map((item) => (
                <li key={item.id} className="mb-5">
                  {item.text}<br />
                </li>
              ))}
            </ul><br /><br />

            <h3 className="text-xl font-bold mb-3">進行中のプロジェクト</h3>
            <ul className="list-disc pl-5">
              {WipItems.map((item) => (
                <li key={item.id} className="mb-5">
                  {item.text}<br />
                  {item.subItems && (
                    <ul className="list-disc pl-10">
                      {item.subItems.map(subItem => (
                        <li key={subItem.id} className="mb-5">
                          {subItem.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Members;