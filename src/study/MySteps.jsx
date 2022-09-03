import React from "react";

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

export default class MySteps extends React.PureComponent {
  render() {
    return (
      <Steps direction="vertical" current={2} status="error">
        <Step
          title="백엔드 끝내기"
          description="2022-09-01 까지 끝내기"
        />
        <Step
          title="ec2 구축하기"
          description=""
        />
        <Step title="프론트엔드 API 작업하기" description="흠..." />
      </Steps>
    );
  }
}