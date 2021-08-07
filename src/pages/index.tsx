import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { CameraIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hartup" />
        <meta
          name="twitter:description"
          content="Make your achievements work for you"
        />
        <meta name="twitter:image" content="/pablo.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@rahatcodes" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="https://www.hartup.io" key="ogurl" />
        <meta property="og:image" content="/pablo.png" key="ogimage" />
        <meta property="og:site_name" content="hartup" key="ogsitename" />
        <meta property="og:title" content="about" key="ogtitle" />
        <meta
          property="og:description"
          content="Make your achievements work for you"
          key="ogdesc"
        />
      </Head>
      <div className="relative bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <Image
                src="/hartuplogo.png"
                alt="hartup"
                width={200}
                height={200}
              />
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Make your achievements</span>
                {` `}
                <span className="block text-indigo-600 xl:inline">
                  work for you.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Managing Achievements is all about tracking what is important to
                you and collecting ideas for your future achievements and
                success. Love it or hate it, performance reviews are ubiquitous
                across enterprises. What has not been available, is a tool that
                can help employees provide REAL evidence of their value
                contribution towards running the enterprise
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                About
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet Hartup
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none mb-4">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/product1.png"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
              <br />
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/product2.png"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Hartup helps you track your achievements. Record your wins,
                  the impacts they have on business, and the challenges you
                  face. Put together the stories of your achievements and reach
                  for them easily when you need them.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  The Timeline is a visual representation of the impact you've
                  had throughout your career. See how many wins, challenges, and
                  lessons you've overcome over time.
                </p>
                <p>
                  Achievements information is where you do your deep dive and
                  can think more about your win. In the future there will be
                  commonly asked interview questions that these wins can help
                  you answer!
                </p>
                <h3>Coming Soon</h3>
                <ul>
                  <li>Public timeline of anonymous shared wins</li>
                  <li>Achievements searchable in your dashboard</li>
                  <li>Achievements discoverable by potential employers</li>
                </ul>
                <div className="bg-white">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="block">Ready to dive in?</span>
                      <span className="block text-indigo-600">
                        Start recording your wins today!
                      </span>
                    </h2>
                    <div className="inline-flex">
                      <Link href="/auth">
                        <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                          Get Started
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
