import { h, type VNode } from 'snabbdom';
import * as licon from 'lib/licon';
import { bind, type MaybeVNodes } from 'lib/snabbdom';
import type SwissCtrl from './ctrl';
import type { Pager } from './interfaces';
import * as search from './search';

export const maxPerPage = 10;

function button(text: string, icon: string, click: () => void, enable: boolean, ctrl: SwissCtrl): VNode {
  return h('button.fbt.is', {
    attrs: { 'data-icon': icon, disabled: !enable, title: text },
    hook: bind('mousedown', click, ctrl.redraw),
  });
}

function scrollToMeButton(ctrl: SwissCtrl): VNode | undefined {
  return ctrl.data.me
    ? h('button.fbt' + (ctrl.focusOnMe ? '.active' : ''), {
        attrs: { 'data-icon': licon.Target, title: 'Scroll to your player' },
        hook: bind('mousedown', ctrl.toggleFocusOnMe, ctrl.redraw),
      })
    : undefined;
}

export function renderPager(ctrl: SwissCtrl, pag: Pager): MaybeVNodes {
  const enabled = !!pag.currentPageResults,
    page = ctrl.page;
  return pag.nbPages > -1
    ? [
        search.button(ctrl),
        ...(ctrl.searching
          ? [search.input(ctrl)]
          : [
              button('First', licon.JumpFirst, () => ctrl.userSetPage(1), enabled && page > 1, ctrl),
              button('Prev', licon.JumpPrev, ctrl.userPrevPage, enabled && page > 1, ctrl),
              h('span.page', (pag.nbResults ? pag.from + 1 : 0) + '-' + pag.to + ' / ' + pag.nbResults),
              button('Next', licon.JumpNext, ctrl.userNextPage, enabled && page < pag.nbPages, ctrl),
              button('Last', licon.JumpLast, ctrl.userLastPage, enabled && page < pag.nbPages, ctrl),
              scrollToMeButton(ctrl),
            ]),
      ]
    : [];
}

export function players(ctrl: SwissCtrl) {
  const page = ctrl.page,
    nbResults = ctrl.data.nbPlayers,
    from = (page - 1) * maxPerPage,
    to = Math.min(nbResults, page * maxPerPage);
  return {
    currentPage: page,
    maxPerPage,
    from,
    to,
    currentPageResults: ctrl.pages[page],
    nbResults,
    nbPages: Math.ceil(nbResults / maxPerPage),
  };
}

export function myPage(ctrl: SwissCtrl): number | undefined {
  return ctrl.data.me ? Math.floor((ctrl.data.me.rank - 1) / 10) + 1 : undefined;
}
