import { Timeline } from 'react-twitter-widgets';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider';
import Terminal from '../components/Terminal';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-5 py-10">
        <div id="slider" className="bg-white shadow-md mb-5 mx-2">
          <Slider />
        </div>

        <main>
          <section id="about" className="p-4 bg-white shadow-md mb-5 mx-2 border-2 border-t-tut-red">
            <h2 className="text-2xl font-bold mb-3">TUT-IICとは</h2>
            <p>TUT-IIC(TUT - Information Infrastructure Club)は、学生の大学生活を快適にするための情報基盤を整える、有志の団体です。</p><br />
            <p>豊橋技科大生の学生生活を支える時間割アプリの「TUTility」をリリースし、日々改善や機能追加をしています。</p><br />
            <p>また、プログラミングの経験が浅い方や、チームでの開発をしてみたい方が気軽に参加できる場所を作ることを目的としており、これを実現するためのメンバーを募集中です。</p><br />
            <p>現在、週1回の対面による活動で、自分の紹介したい技術を発表するLT会と、自分の学びたいことやReactのチュートリアルを行う勉強会を開催しています。</p><br />
            <p>TUTilityのほかにも、学生生活を支える新規プロジェクトを開発中です。</p><br />
            <p>興味のある方は、ページ上部の𝕏(旧Twitter)へご連絡ください。</p><br />
          </section>

          <div className="flex flex-col sm:flex-row justify-around items-stretch w-full">
            <section id="activities" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2 border-2 border-t-tut-red">
              <h2 className="text-2xl font-bold mb-3">活動内容・スケジュール</h2>
              <p>週1回、対面でLT会と勉強会を開催しています。</p><br />
              <Link to="/activities" className="font-medium hover:text-gray-400"><p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p></Link>
            </section>

            <section id="members" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2 border-2 border-t-tut-red">
              <h2 className="text-2xl font-bold mb-3">部員の活動</h2>
              <p>LT会で発表した技術や、進行中のプロジェクトについて紹介しています。</p><br />
              <Link to="/members" className="font-medium hover:text-gray-400"><p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p></Link>
            </section>

            <section id="privacy" className="flex-1 p-4 bg-white shadow-md mb-5 min-w-0 mx-2 border-2 border-t-tut-red">
              <h2 className="text-2xl font-bold mb-3">プライバシーポリシー</h2>
              <p>TUTilityのプライバシーポリシーを載せています。</p><br />
              <Link to="/privacy" className="font-medium hover:text-gray-400"><p className="text-lg font-bold text-right"><span className="text-red-600">▶</span>詳しく見る</p></Link>
            </section>
          </div>

          <div className="flex flex-col sm:flex-row justify-around items-stretch w-full">
            <div className="flex-1 p-4 min-w-0">
              <Terminal />
            </div>
            <div className="flex-1 p-4 min-w-0">
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'TUT_IIC'
                }}
                options={{
                  height: '600'
                }}
              />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Home;
