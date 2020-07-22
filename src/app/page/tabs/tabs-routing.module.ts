import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'message',
            loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },

      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'profile',
            children: [
              {
                path: '',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
              },
              {
                path: 'message',
                loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule)
              },
              {
                path: 'timevalidation',
                children: [
                  {
                    path: '',
                    loadChildren: () => import('../timevalidation/timevalidation.module').then(m => m.TimevalidationPageModule)
                  },
                  {
                    path: 'review',
                    loadChildren: () => import('../review/review.module').then(m => m.ReviewPageModule)
                  }
                ]
              }
            ]
          },

        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'search',
            loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          },
          {
            path: 'accept',
            loadChildren: () => import('../accept/accept.module').then(m => m.AcceptPageModule)
          },
          {
            path: 'timevalidation',
            loadChildren: () => import('../timevalidation/timevalidation.module').then(m => m.TimevalidationPageModule)
          }
        ]
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
