// Copyright 2017-2021 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Route } from './types';

import Component from '@polkadot/apps-merchants/routes/settlements';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: []
    },
    group: 'storage',
    icon: 'brush',
    name: 'settlements',
    text: t('nav.settlements', 'Settlements', { ns: 'apps-routing' })
  };
}