import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                    Whale Hunter
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                    Trend following cryptocurrencies
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                200 EMA 1M above<br></br>
                150 above 200 EMA above<br></br>
                50 above those two<br></br>
                price above 50<br></br>
                price is above at least 30% 52 weeks low<br></br>
                price is within 25 percent 52 week high -> close and high is better -> percentage 필요<br></br>
                relative strength ranking less than 70 -> high better -> percentage 필요
                </p>
            </div>
            {/* Main content - crypto cards */}
            <Ticker />

            {/* TODO: footer code */}
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;