import { FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: "tab-group-dynamic-example",
  templateUrl: "tab-group-dynamic-example.html",
  styleUrls: ["tab-group-dynamic-example.css"]
})
export class TabGroupDynamicExample {
  tabs = ["First", "Second", "Third"];
  selected = new FormControl(0);

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(OnboardingDialog, {
      height: "70%",
      width: "70%",
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push("New");

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

@Component({
  selector: "onboarding-dialog",
  templateUrl: "onboarding-dialog.html",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: true }
    }
  ]
})
export class OnboardingDialog {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
