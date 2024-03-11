/*! Element Plus v2.4.1 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ElementPlusLocaleArEg = factory());
})(this, (function () { 'use strict';

  var arEg = {
    name: "ar-eg",
    el: {
      colorpicker: {
        confirm: "\u0645\u0648\u0627\u0641\u0642",
        clear: "\u0625\u0632\u0627\u0644\u0629",
        defaultLabel: "\u0625\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646",
        description: "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u062D\u0627\u0644\u064A \u0647\u0648 {color}. \u0627\u0636\u0641\u0637 \u0627\u0646\u062A\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0644\u0648\u0646 \u062C\u062F\u064A\u062F"
      },
      datepicker: {
        now: "\u0627\u0644\u0622\u0646",
        today: "\u0627\u0644\u064A\u0648\u0645",
        cancel: "\u0625\u0644\u063A\u0627\u0621",
        clear: "\u0625\u0632\u0627\u0644\u0629",
        confirm: "\u0645\u0648\u0627\u0641\u0642",
        dateTablePrompt: "\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0627\u0633\u0647\u0645 \u0648 \u0627\u0636\u063A\u0637 \u0627\u0646\u062A\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0645\u0631\u0627\u062F \u0645\u0646 \u0627\u0644\u0634\u0647\u0631",
        monthTablePrompt: "\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0627\u0633\u0647\u0645 \u0648\u0627\u0636\u063A\u0637 \u0627\u0646\u062A\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0634\u0647\u0631",
        yearTablePrompt: "\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0627\u0633\u0647\u0645 \u0648\u0627\u0636\u063A\u0637 \u0627\u0646\u062A\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0633\u0646\u0629",
        selectDate: "\u0625\u062E\u062A\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        selectTime: "\u0625\u062E\u062A\u0631 \u0627\u0644\u0648\u0642\u062A",
        startDate: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621",
        startTime: "\u0648\u0642\u062A \u0627\u0644\u0628\u062F\u0621",
        endDate: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621",
        endTime: "\u0648\u0642\u062A \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621",
        prevYear: "\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        nextYear: "\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
        prevMonth: "\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0633\u0627\u0628\u0642",
        nextMonth: "\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u062A\u0627\u0644\u064A",
        year: "\u0633\u0646\u0629",
        month1: "\u064A\u0646\u0627\u064A\u0631",
        month2: "\u0641\u0628\u0631\u0627\u064A\u0631",
        month3: "\u0645\u0627\u0631\u0633",
        month4: "\u0623\u0628\u0631\u064A\u0644",
        month5: "\u0645\u0627\u064A\u0648",
        month6: "\u064A\u0648\u0646\u064A\u0648",
        month7: "\u064A\u0648\u0644\u064A\u0648",
        month8: "\u0623\u063A\u0633\u0637\u0633",
        month9: "\u0633\u0628\u062A\u0645\u0628\u0631",
        month10: "\u0623\u0643\u062A\u0648\u0628\u0631",
        month11: "\u0646\u0648\u0641\u0645\u0628\u0631",
        month12: "\u062F\u064A\u0633\u0645\u0628\u0631",
        week: "\u0623\u0633\u0628\u0648\u0639",
        weeks: {
          sun: "\u0627\u0644\u0623\u062D\u062F",
          mon: "\u0627\u0644\u0623\u062B\u0646\u064A\u0646",
          tue: "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
          wed: "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
          thu: "\u0627\u0644\u062E\u0645\u064A\u0633",
          fri: "\u0627\u0644\u062C\u0645\u0639\u0629",
          sat: "\u0627\u0644\u0633\u0628\u062A"
        },
        months: {
          jan: "\u064A\u0646\u0627\u064A\u0631",
          feb: "\u0641\u0628\u0631\u0627\u064A\u0631",
          mar: "\u0645\u0627\u0631\u0633",
          apr: "\u0623\u0628\u0631\u064A\u0644",
          may: "\u0645\u0627\u064A\u0648",
          jun: "\u064A\u0648\u0646\u064A\u0648",
          jul: "\u064A\u0648\u0644\u064A\u0648",
          aug: "\u0623\u063A\u0633\u0637\u0633",
          sep: "\u0633\u0628\u062A\u0645\u0628\u0631",
          oct: "\u0623\u0643\u062A\u0648\u0628\u0631",
          nov: "\u0646\u0648\u0641\u0645\u0628\u0631",
          dec: "\u062F\u064A\u0633\u0645\u0628\u0631"
        }
      },
      inputNumber: {
        decrease: "\u0637\u0631\u062D \u0631\u0642\u0645",
        increase: "\u0632\u064A\u0627\u062F\u0629 \u0631\u0642\u0645"
      },
      select: {
        loading: "\u062C\u0627\u0631 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        noMatch: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629",
        noData: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
        placeholder: "\u0625\u062E\u062A\u0631"
      },
      dropdown: {
        toggleDropdown: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"
      },
      cascader: {
        noMatch: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629",
        loading: "\u062C\u0627\u0631 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        placeholder: "\u0625\u062E\u062A\u0631",
        noData: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A"
      },
      pagination: {
        goto: "\u0623\u0630\u0647\u0628 \u0625\u0644\u0649",
        pagesize: "/\u0635\u0641\u062D\u0629",
        total: "\u0627\u0644\u0643\u0644 {total}",
        pageClassifier: "",
        page: "\u0635\u0641\u062D\u0629",
        prev: "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        next: "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
        currentPage: "\u0635\u0641\u062D\u0629 \u0631\u0642\u0645 {pager}",
        prevPages: "\u0635\u0641\u062D\u0627\u062A {pager} \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        nextPages: "\u0635\u0641\u062D\u0627\u062A {pager} \u0627\u0644\u062A\u0627\u0644\u064A\u0629"
      },
      dialog: {
        close: "\u0623\u063A\u0644\u0642 \u0647\u0630\u0627 \u0627\u0644\u062A\u0628\u0648\u064A\u0628"
      },
      drawer: {
        close: "\u0623\u063A\u0644\u0642 \u0647\u0630\u0627 \u0627\u0644\u062A\u0628\u0648\u064A\u0628"
      },
      messagebox: {
        title: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        confirm: "\u0645\u0648\u0627\u0641\u0642",
        cancel: "\u0625\u0644\u063A\u0627\u0621",
        error: "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
        close: "\u0623\u063A\u0644\u0642 \u0647\u0630\u0627 \u0627\u0644\u062A\u0628\u0648\u064A\u0628"
      },
      upload: {
        deleteTip: "\u0627\u0636\u063A\u0637 \u0627\u0632\u0627\u0644\u0629 \u0644\u062D\u0630\u0641 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
        delete: "\u062D\u0630\u0641",
        preview: "\u0639\u0631\u0636",
        continue: "\u0625\u0633\u062A\u0645\u0631\u0627\u0631"
      },
      slider: {
        defaultLabel: "\u0634\u0631\u064A\u0637 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0628\u064A\u0646 {min} \u0648 {max}",
        defaultRangeStartLabel: "\u0627\u062E\u062A\u0631 \u0642\u064A\u0645\u0629 \u0627\u0644\u0628\u062F\u0621",
        defaultRangeEndLabel: "\u0627\u062E\u062A\u0631 \u0642\u064A\u0645\u0629 \u0627\u0644\u0646\u0647\u0627\u064A\u0629"
      },
      table: {
        emptyText: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
        confirmFilter: "\u062A\u0623\u0643\u064A\u062F",
        resetFilter: "\u062D\u0630\u0641",
        clearFilter: "\u0627\u0644\u0643\u0644",
        sumText: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639"
      },
      tree: {
        emptyText: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A"
      },
      transfer: {
        noMatch: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629",
        noData: "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
        titles: ["\u0642\u0627\u0626\u0645\u0629 1", "\u0642\u0627\u0626\u0645\u0629 2"],
        filterPlaceholder: "\u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629",
        noCheckedFormat: "{total} \u0639\u0646\u0627\u0635\u0631",
        hasCheckedFormat: "{checked}/{total} \u0645\u062E\u062A\u0627\u0631"
      },
      image: {
        error: "\u0641\u0634\u0644"
      },
      pageHeader: {
        title: "\u0639\u0648\u062F\u0629"
      },
      popconfirm: {
        confirmButtonText: "\u0646\u0639\u0645",
        cancelButtonText: "\u0644\u0627"
      },
      carousel: {
        leftArrow: "Carousel arrow left",
        rightArrow: "Carousel arrow right",
        indicator: "Carousel switch to index {index}"
      }
    }
  };

  return arEg;

}));
