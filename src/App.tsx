import { Timeline } from 'react-twitter-widgets';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-tut-red text-white p-4">
        <h1 className="text-xl md:text-3xl font-bold">TUT-IIC</h1>
        <p>アイコン</p>
      </header>

      <nav className="bg-gray-200 p-4 shadow mb-5">
        <ul className="flex justify-around">
          <li><a href="#top" className="font-medium text-tut-red hover:text-red-900">トップページ</a></li>
          <li><a href="#activities" className="font-medium text-tut-red hover:text-red-900">活動内容・スケジュール</a></li>
          <li><a href="#members" className="font-medium text-tut-red hover:text-red-900">部員の活動</a></li>
          <li><a href="#contact" className="font-medium text-tut-red hover:text-red-900">関連リンク・連絡先</a></li>
          <li><a href="#privacy" className="font-medium text-tut-red hover:text-red-900">プライバシーポリシー</a></li>
        </ul>
      </nav>

      <div>
        <p>画像数枚がスライドショーで入れ替わるやつ</p>
      </div>

      <main>
        <section id="about" className="p-4 bg-white shadow-md mb-5 mx-2">
          <h2 className="text-2xl font-bold mb-3">TUT-IICとは</h2>
          <p>test</p>
          <p>test</p>
        </section>

        <div className="flex flex-wrap justify-around items-stretch w-full">
          <section id="activities" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2">
            <h2 className="text-2xl font-bold mb-3">活動内容・スケジュール</h2>
            <p>半透明の画像を背景におく</p>
            <p>test</p>
            <p>test</p>
            <p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p>
          </section>

          <section id="members" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2">
            <h2 className="text-2xl font-bold mb-3">部員の活動</h2>
            <p>半透明の画像を背景におく</p>
            <p>test</p>
            <p>test</p>
            <p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p>
          </section>

          <section id="contact" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2">
            <h2 className="text-2xl font-bold mb-3">関連リンク・連絡先</h2>
            <p>半透明の画像を背景におく</p>
            <p>フッターにおいてもいいかも</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p>
          </section>

          <section id="privacy" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2">
            <h2 className="text-2xl font-bold mb-3">プライバシーポリシー</h2>
            <p>半透明の画像を背景におく</p>
            <p>test</p>
            <p>test</p>
            <p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p>
          </section>
        </div>

        <div className="w-1/4 mb-5 mx-2">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'TUT_IIC'
            }}
            options={{
              height: '800'
            }}
          />
        </div>

      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 TUT-IIC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
