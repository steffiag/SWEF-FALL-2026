export default function InterestPage() {
  return (
    <main className="">
          <h1 className="me font-candy text-5xl">Listening to music</h1>
          <p>Since I got to high school, I've started to listen to music a lot. It's very relaxing for me and helps me stay focused too. I listen to music when I'm studying, driving, etc.</p>
          <h2 className = "text-2xl">My favorite artists:</h2>
          <ul className="mt-4 flex flex-col gap-6">
            <li className="grid grid-cols-[10rem_auto] items-center gap-4">
              <span>Don Toliver</span>
              <img className="aspect-square w-24 rounded-2xl" src="/images/don-toliver.jpeg" alt="Don Toliver" />
            </li>
            <li className="grid grid-cols-[10rem_auto] items-center gap-4">
              <span>Tyler the Creator</span>
              <img className="aspect-square w-24 rounded-2xl " src="/images/tyler-the-creator.jpeg" alt="Tyler the Creator" />
            </li>
            <li className="grid grid-cols-[10rem_auto] items-center gap-4">
              <span>Sza</span>
              <img className="aspect-square w-24 rounded-2xl" src="/images/sza.jpg" alt="Sza" />
            </li>
          </ul>
    </main>
  );
}