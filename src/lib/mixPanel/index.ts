import { Mixpanel } from 'mixpanel-react-native';

class MixpanelTracker {
  private tracker: Mixpanel;

  constructor() {
    //Necessary to initialize Mixpanel with a dummy token
    //since the Mixpanel library requires a token to initialize.
    let dummyToken = '';
    this.tracker = new Mixpanel(dummyToken, false);
    this.tracker.init();
  }
  trackerScreen(screenName: string) {
    this.tracker.track(screenName);
    console.log(`Screen tracked: ${screenName}`);
  }

  trackerEvent(eventName: string, properties?: Record<string, string>) {
    this.tracker.track(eventName, properties);
    console.log(`Event tracked: ${eventName}`, properties);
  }
}

export const mixpanelTracker = new MixpanelTracker();
