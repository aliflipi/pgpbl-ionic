import { Component } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: { action: 'delete' },
      handler: () => {
        console.log('Delete clicked');
      }
    },
    {
      text: 'Share',
      data: { action: 'share' },
      handler: () => {
        console.log('Share clicked');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: { action: 'cancel' },
    },
  ];

  constructor() { }
}


