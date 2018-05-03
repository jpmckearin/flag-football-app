import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

import { PlayersProvider } from '../../providers/players/players';

@Component({
  selector: 'page-lineup',
  templateUrl: 'lineup.html',
  providers: [PlayersProvider]
})
export class LineupPage {
  players: any[];
  editButtonText: string = 'Edit';
  editing: boolean = false;
  errorMessage: string;

  constructor(public navCtrl: NavController, public playersProvider: PlayersProvider) {

  }

  ionViewDidLoad() {
    this.getPlayers();
  }

  getPlayers() {
    this.playersProvider.getPlayers()
      .subscribe(
        players => this.players = players,
        error => this.errorMessage = <any>error
      );
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.editButtonText = 'Done';
    } else {
      this.editButtonText = 'Edit';
    }
  }

  reorderData(indexes: any) {
    this.players = reorderArray(this.players, indexes);
  }
}
