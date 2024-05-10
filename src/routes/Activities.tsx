interface ListItem {
  id: number;
  text: string;
  subItems?: ListItem[];
}

const ScheduleItems: ListItem[] = [
  { id: 1, text: "5/10(木)16:30-19:30" },
  { id: 2, text: "5/17(木)16:30-19:30" },
  { id: 3, text: "5/24(木)16:30-19:30" }
];

function Activities() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-5 py-10">
        <main>
          <section id="about" className="p-4 bg-white shadow-md mb-5 mx-2 border-2 border-t-tut-red">
            <h2 className="text-2xl font-bold mb-3">活動内容・スケジュール</h2>
            <p>週1回、対面でLT会と勉強会を開催しています。</p><br />
            <p>毎週木曜日の16:30-19:30に、図書館2階の「グループ研究室1」で活動しています(曜日変更あり)。</p><br />
            <p>途中入室や途中退室は自由ですので、お気軽にお越しください。</p><br />
            <p>必ず何かのプロジェクトにかかわらないといけないということはなく、見学するだけでも構いません。</p><br /><br /><br />
            <h3 className="text-xl font-bold mb-3">直近のスケジュール</h3>
            <ul className="list-disc pl-5">
              {ScheduleItems.map((item) => (
                <li key={item.id} className="mb-5">
                  {item.text}<br />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Activities;