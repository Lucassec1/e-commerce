export default class Timeout {
  private id: number;
  private handler: TimerHandler;
  private start: number;
  private timeLeft: number;

  constructor(handler: TimerHandler, time: number) {
    this.id = window.setTimeout(handler, time);
    this.handler = handler;
    this.start = Date.now();
    this.timeLeft = time;
  }

  public clear(): void {
    clearTimeout(this.id);
  }

  public pause(): void {
    const passed = Date.now() - this.start;
    this.timeLeft = this.timeLeft - passed;
    this.clear();
  }

  public continue(): void {
    this.clear();
    this.id = window.setTimeout(this.handler, this.timeLeft);
    this.start = Date.now();
  }
}
