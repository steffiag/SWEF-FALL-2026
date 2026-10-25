export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
      <h1 className="me font-candy text-5xl">Steffia George</h1>
      <p>Hi. I'm from Bergenfield, NJ which is about 20 minutes from NYC.<br></br> I love playing piano and tennis. I also love listening to music</p>
      <h2 className="me text-2xl">My Socials</h2>
      <ul>
        <li><a href="https://github.com/steffiag" target = "_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/steffia-george-11a906325/" target = "_blank">Linkedln</a></li>
        <li><a href="https://www.instagram.com/steffia.g/" target = "_blank">Instagram</a></li>
      </ul>
      </div>
      <img className="rounded-2xl object-cover" src="/images/pic.jpeg" alt="Profile picture" />
      </div>
    </main>
  );
}