import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { SubsPage } from '../subs/subs';
import { StatsPage } from '../stats/stats';
import { LineupPage } from '../lineup/lineup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  lineupTab = LineupPage;
  subsTab = SubsPage;
  statsTab = StatsPage;
  settingsTab = SettingsPage;

  constructor() {

  }
}
