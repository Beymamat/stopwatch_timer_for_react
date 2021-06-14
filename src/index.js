import ReactDom from "react-dom";
import React, { PureComponent } from "react";

class StopWatch extends PureComponent {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    isDisabled: false,
    startInverval: "",
    savedInterval: [],
    tsecond: 0,
    tminute: 0,
    thour: 0,
    TimerisDisabled: false,
    TimerStartInverval: "",
    TimerSavedInterval: [],
  };

  ///// stop watch ////
  onStartClicked = () => {
    let i = setInterval(() => {
      const { second, minute, hour } = this.state;

      this.setState({
        isDisabled: true,
      });

      if (second === 59) {
        if (minute === 59) {
          this.setState({
            hour: hour + 1,
            minute: 0,
            second: 0,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }

      this.setState({
        startInverval: i,
      });
    }, 1000);
  };

  onStopClicked = () => {
    clearInterval(this.state.startInverval);
    this.setState({
      isDisabled: false,
    });
  };

  onIntervalClicked = () => {
    const { savedInterval, hour, minute, second } = this.state;
    savedInterval.push(hour + ":" + minute + ":" + second);
    this.setState({
      savedInterval: savedInterval,
    });
  };

  onClearClicked = () => {
    this.onStopClicked();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      savedInterval: [],
    });
  };

  ///// timer /////

  onTimerHourPlus = () => {
    const { thour } = this.state;
    this.setState({
      thour: thour + 1,
    });
  };
  onTimerHourMinus = () => {
    const { thour } = this.state;
    if (thour === 0) {
      this.setState({
        thour: 0,
      });
    } else {
      this.setState({
        thour: thour - 1,
      });
    }
  };

  onTimerMinutePlus = () => {
    const { tminute } = this.state;
    this.setState({
      tminute: tminute + 1,
    });
  };
  onTimerMinuteMinus = () => {
    const { tminute } = this.state;
    if (tminute === 0) {
      this.setState({
        tminute: 0,
      });
    } else {
      this.setState({
        tminute: tminute - 1,
      });
    }
  };

  onTimerSecondPlus = () => {
    const { tsecond } = this.state;
    this.setState({
      tsecond: tsecond + 1,
    });
  };
  onTimerSecondMinus = () => {
    const { tsecond } = this.state;
    if (tsecond === 0) {
      this.setState({
        tsecond: 0,
      });
    } else {
      this.setState({
        tsecond: tsecond - 1,
      });
    }
  };

  onTimerStartClicked = () => {
    let i = setInterval(() => {
      const { tsecond, tminute, thour } = this.state;

      this.setState({
        TimerisDisabled: true,
      });

      if (thour === 0 && tminute === 0 && tsecond === 0) {
        this.onTimerStopClicked();
      } else {
        if (tsecond === 0) {
          if (tminute === 0) {
            if (thour === 0) {
              this.setState({
                thour: 0,
                tminute: 0,
                tsecond: 0,
              });
            } else {
              this.setState({
                thour: thour - 1,
                tminute: 59,
                tsecond: 59,
              });
            }
          } else {
            if (tminute === 0) {
              this.setState({
                tminute: 0,
              });
            } else {
              this.setState({
                tsecond: 59,
                tminute: tminute - 1,
              });
            }
          }
        } else {
          if (tsecond === 0) {
            this.setState({
              tsecond: 0,
            });
          } else {
            this.setState({
              tsecond: tsecond - 1,
            });
          }
        }

        this.setState({
          TimerStartInverval: i,
        });
      }
    }, 1000);
  };
  onTimerStopClicked = () => {
    clearInterval(this.state.TimerStartInverval);
    this.setState({
      TimerisDisabled: false,
    });
  };

  onTimerIntervalClicked = () => {
    const { TimerSavedInterval, thour, tminute, tsecond } = this.state;
    TimerSavedInterval.push(thour + ":" + tminute + ":" + tsecond);
    this.setState({
      TimerSavedInterval: TimerSavedInterval,
    });
  };

  onTimerClearClicked = () => {
    this.onTimerStopClicked();
    this.setState({
      thour: 0,
      tminute: 0,
      tsecond: 0,
      TimerSavedInterval: [],
    });
  };

  render() {
    const { second, minute, hour, isDisabled, savedInterval } = this.state;
    const {
      tsecond,
      tminute,
      thour,
      TimerisDisabled,
      TimerSavedInterval,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offet-md-3">
            <div className="card">
              <div className="card-header">
                <h1>StopWatch</h1>
              </div>
              <div className="card-body">
                <h3 className="text-center">
                  {hour}:{minute}:{second}
                </h3>
              </div>
              <div className={"card-footer"}>
                <div className={"row"}>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-success"}
                      onClick={this.onStartClicked}
                      disabled={isDisabled}
                    >
                      Start
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-warning"}
                      onClick={this.onStopClicked}
                    >
                      Stop
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-info"}
                      disabled={!isDisabled}
                      onClick={this.onIntervalClicked}
                    >
                      Interval
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-danger"}
                      onClick={this.onClearClicked}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              {savedInterval.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="col-md-6 offet-md-3">
            <div className="card">
              <div className="card-header">
                <h1>Timer</h1>
              </div>
              <div className="card-body">
                <h3 className="text-center">
                  <span onClick={this.onTimerHourPlus}>+</span>
                  {thour}
                  <span onClick={this.onTimerHourMinus}>-</span>:
                  <span onClick={this.onTimerMinutePlus}>+</span>
                  {tminute}
                  <span onClick={this.onTimerMinuteMinus}>-</span>:
                  <span onClick={this.onTimerSecondPlus}>+</span>
                  {tsecond}
                  <span onClick={this.onTimerSecondMinus}>-</span>
                </h3>
              </div>
              <div className={"card-footer"}>
                <div className={"row"}>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-success"}
                      onClick={this.onTimerStartClicked}
                      disabled={TimerisDisabled}
                    >
                      Start
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-warning"}
                      onClick={this.onTimerStopClicked}
                    >
                      Stop
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-info"}
                      disabled={!TimerisDisabled}
                      onClick={this.onTimerIntervalClicked}
                    >
                      Interval
                    </button>
                  </div>
                  <div className={"col-md-3"}>
                    <button
                      className={"btn btn-danger"}
                      onClick={this.onTimerClearClicked}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              {TimerSavedInterval.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;

ReactDom.render(<StopWatch />, document.getElementById("root"));
