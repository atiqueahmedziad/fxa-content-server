/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'lib/experiments/base'
], function (BaseExperiment) {
  'use strict';

  var createSaveStateDelegate = BaseExperiment.createSaveStateDelegate;

  var SyncCheckboxExperiment = BaseExperiment.extend({
    notifications: {
      'syncCheckbox.clicked': createSaveStateDelegate('clicked'),
      'syncCheckbox.triggered': createSaveStateDelegate('triggered'),
      'verification.success': '_onVerificationSuccess'
    },

    _onVerificationSuccess: function () {
      this.saveState('verified');

      if (this.hasState('clicked')) {
        this.saveState('clicked.verified');
      }

      if (this.hasState('triggered')) {
        this.saveState('triggered.verified');
      }
    }
  });

  return SyncCheckboxExperiment;
});
