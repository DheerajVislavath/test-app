/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './github-followers.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './github-followers.component';
import * as i5 from '../services/github-followers.service';
const styles_GithubFollowersComponent:any[] = [i0.styles];
export const RenderType_GithubFollowersComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_GithubFollowersComponent,data:{}});
function View_GithubFollowersComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),24,'div',[['class',
      'media']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),6,'div',[['class','media-left']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),3,'a',[['href',
          '#']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(6,0,(null as any),
          (null as any),0,'img',[['alt','...'],['class','avatar media-object']],[[8,
              'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(10,
          0,(null as any),(null as any),13,'div',[['class','media-body']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵeld(12,0,(null as any),(null as any),
          6,'h4',[['class','media-heading']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵeld(14,0,(null as any),(null as any),3,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,15).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(15,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(16,3),(_l()(),i1.ɵted(17,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(20,0,(null as any),(null as any),2,'a',[['routerLink',
          'follower.html_url']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,21).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(21,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(22,(null as any),['',''])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,
      _v) => {
    const currVal_3:any = _ck(_v,16,0,'/followers',_v.context.$implicit.id,_v.context.$implicit.login);
    _ck(_v,15,0,currVal_3);
    const currVal_7:any = 'follower.html_url';
    _ck(_v,21,0,currVal_7);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit.avatar_url,
        '');
    _ck(_v,6,0,currVal_0);
    const currVal_1:any = i1.ɵnov(_v,15).target;
    const currVal_2:any = i1.ɵnov(_v,15).href;
    _ck(_v,14,0,currVal_1,currVal_2);
    const currVal_4:any = _v.context.$implicit.login;
    _ck(_v,17,0,currVal_4);
    const currVal_5:any = i1.ɵnov(_v,21).target;
    const currVal_6:any = i1.ɵnov(_v,21).href;
    _ck(_v,20,0,currVal_5,currVal_6);
    const currVal_8:any = _v.context.$implicit.html_url;
    _ck(_v,22,0,currVal_8);
  });
}
export function View_GithubFollowersComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_GithubFollowersComponent_1)),i1.ɵdid(1,802816,(null as any),0,i3.NgForOf,
      [i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},
      (null as any))],(_ck,_v) => {
    var _co:i4.GithubFollowersComponent = _v.component;
    const currVal_0:any = _co.followers;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_GithubFollowersComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'github-followers',
      ([] as any[]),(null as any),(null as any),(null as any),View_GithubFollowersComponent_0,
      RenderType_GithubFollowersComponent)),i1.ɵdid(1,114688,(null as any),0,i4.GithubFollowersComponent,
      [i2.ActivatedRoute,i5.GithubFollowersService],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const GithubFollowersComponentNgFactory:i1.ComponentFactory<i4.GithubFollowersComponent> = i1.ɵccf('github-followers',
    i4.GithubFollowersComponent,View_GithubFollowersComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovQW5ndWxhciAyL01vc2gtQW5ndWxhci0yLW1hc3Rlci9zcmMvYXBwL2dpdGh1Yi1mb2xsb3dlcnMvZ2l0aHViLWZvbGxvd2Vycy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovQW5ndWxhciAyL01vc2gtQW5ndWxhci0yLW1hc3Rlci9zcmMvYXBwL2dpdGh1Yi1mb2xsb3dlcnMvZ2l0aHViLWZvbGxvd2Vycy5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Bbmd1bGFyIDIvTW9zaC1Bbmd1bGFyLTItbWFzdGVyL3NyYy9hcHAvZ2l0aHViLWZvbGxvd2Vycy9naXRodWItZm9sbG93ZXJzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovQW5ndWxhciAyL01vc2gtQW5ndWxhci0yLW1hc3Rlci9zcmMvYXBwL2dpdGh1Yi1mb2xsb3dlcnMvZ2l0aHViLWZvbGxvd2Vycy5jb21wb25lbnQudHMuR2l0aHViRm9sbG93ZXJzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiAqbmdGb3I9XCJsZXQgZm9sbG93ZXIgb2YgZm9sbG93ZXJzXCIgY2xhc3M9XCJtZWRpYVwiPlxuICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxuICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyIG1lZGlhLW9iamVjdFwiIHNyYz1cInt7IGZvbGxvd2VyLmF2YXRhcl91cmwgfX1cIiBhbHQ9XCIuLi5cIj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgIDxoNCBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2ZvbGxvd2VycycsIGZvbGxvd2VyLmlkLCBmb2xsb3dlci5sb2dpbl1cIj57eyBmb2xsb3dlci5sb2dpbiB9fTwvYT5cbiAgICA8L2g0PlxuICAgIDxhIHJvdXRlckxpbms9XCJmb2xsb3dlci5odG1sX3VybFwiPnt7IGZvbGxvd2VyLmh0bWxfdXJsIH19PC9hPlxuICA8L2Rpdj5cbjwvZGl2PiIsIjxnaXRodWItZm9sbG93ZXJzPjwvZ2l0aHViLWZvbGxvd2Vycz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFzRCw0Q0FDcEQ7VUFBQTtVQUFBLDRDQUF3QjtVQUFBLGFBQ3RCO1VBQUE7TUFBWSxnREFDVjtVQUFBO2NBQUE7TUFBMkUsOENBQ3pFO1VBQUEsV0FDQSw0Q0FDTjtVQUFBO1VBQUEsMERBQXdCO1VBQUEsMkJBQ3RCO1VBQUE7VUFBQSw4QkFBMEI7TUFDeEI7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFHLE9BQTJEO01BQXdCLDhDQUNuRjtVQUFBLGFBQ0w7VUFBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLGVBQWtDLDJDQUEyQjtVQUFBLHlCQUN6RDs7SUFIQztJQUFILFlBQUcsU0FBSDtJQUVDO0lBQUgsWUFBRyxTQUFIOztJQVBtQztRQUFBO0lBQWpDLFdBQWlDLFNBQWpDO0lBS0E7SUFBQTtJQUFBLFlBQUEsbUJBQUE7SUFBOEQ7SUFBQTtJQUVoRTtJQUFBO0lBQUEsWUFBQSxtQkFBQTtJQUFrQztJQUFBOzs7O29CQVZ0QztNQUFBLHlDQUFBO01BQUE7TUFBQTs7SUFBSztJQUFMLFdBQUssU0FBTDs7OztvQkNBQTtNQUFBO3lDQUFBLFVBQUE7TUFBQTs7UUFBQTs7OzsifQ==
