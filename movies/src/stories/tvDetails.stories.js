import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleData2";

export default {
  title: "Tv Details Page/TvDetails",
  component: TvDetails,
};

export const Basic = () => <TvDetails tv={SampleTv} />;
Basic.storyName = "Default";
