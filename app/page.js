import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-[calc(100vh-8rem)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/imageedit_1_4973738336.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          width={1920}
          height={1280}
        />
        <div>
          <h1 className="text-5xl font-bold">Play basketball stats!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
