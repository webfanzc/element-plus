/*! Element Plus v2.9.1 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ElementPlusLocaleMy = factory());
})(this, (function () { 'use strict';

  var my = {
    name: "my",
    el: {
      breadcrumb: {
        label: "\u1018\u101B\u1010\u103A\u1012\u103A\u1001\u101B\u1019\u103A"
      },
      colorpicker: {
        confirm: "\u1021\u102D\u102F\u1000\u1031",
        clear: "\u101B\u103E\u1004\u103A\u1038\u1019\u101A\u103A",
        defaultLabel: "\u1021\u101B\u1031\u102C\u1004\u103A\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        description: "\u101C\u1000\u103A\u101B\u103E\u102D\u1021\u101B\u1031\u102C\u1004\u103A\u1019\u103E\u102C {color} \u1016\u103C\u1005\u103A\u1015\u102B\u101E\u100A\u103A\u104B \u1010\u1001\u103C\u102C\u1038\u1021\u101B\u1031\u102C\u1004\u103A\u1000\u102D\u102F\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u101C\u102D\u102F\u1015\u102B\u1000 enter \u1000\u102D\u102F\u1014\u103E\u102D\u1015\u103A\u1015\u102B\u104B",
        alphaLabel: "alpha \u1010\u1014\u103A\u1016\u102D\u102F\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B"
      },
      datepicker: {
        now: "\u101A\u1001\u102F",
        today: "\u101A\u1014\u1031\u1037",
        cancel: "\u1015\u101A\u103A\u1016\u103B\u1000\u103A",
        clear: "\u101B\u103E\u1004\u103A\u1038\u1019\u101A\u103A",
        confirm: "\u1021\u102D\u102F\u1000\u1031",
        dateTablePrompt: "arrow keys \u1014\u103E\u1004\u103A\u1037 enter \u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u1014\u1031\u1037\u101B\u1000\u103A \u1000\u102D\u102F\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        monthTablePrompt: "arrow keys \u1014\u103E\u1004\u103A\u1037 enter \u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u101C \u1000\u102D\u102F\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        yearTablePrompt: "arrow keys \u1014\u103E\u1004\u103A\u1037 enter \u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u1014\u103E\u1005\u103A \u1000\u102D\u102F\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        selectedDate: "\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u101B\u1000\u103A\u1005\u103D\u1032",
        selectDate: "\u101B\u1000\u103A\u1005\u103D\u1032\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        selectTime: "\u1021\u1001\u103B\u102D\u1014\u103A\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B",
        startDate: "\u1005\u1010\u1004\u103A\u1019\u100A\u103A\u1037\u101B\u1000\u103A\u1005\u103D\u1032",
        startTime: "\u1005\u1010\u1004\u103A\u1019\u100A\u103A\u1037\u1021\u1001\u103B\u102D\u1014\u103A",
        endDate: "\u1000\u102F\u1014\u103A\u1006\u102F\u1036\u1038\u1019\u100A\u103A\u1037\u101B\u1000\u103A\u1005\u103D\u1032",
        endTime: "\u1000\u102F\u1014\u103A\u1006\u102F\u1036\u1038\u1019\u100A\u103A\u1037\u1021\u1001\u103B\u102D\u1014\u103A",
        prevYear: "\u101A\u1001\u1004\u103A\u1014\u103E\u1005\u103A",
        nextYear: "\u1014\u1031\u102C\u1000\u103A\u1014\u103E\u1005\u103A",
        prevMonth: "\u101A\u1001\u1004\u103A\u101C",
        nextMonth: "\u1014\u1031\u102C\u1000\u103A\u101C",
        year: "",
        month1: "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E",
        month2: "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E",
        month3: "\u1019\u1010\u103A",
        month4: "\u1027\u1015\u103C\u102E",
        month5: "\u1019\u1031",
        month6: "\u1007\u103D\u1014\u103A",
        month7: "\u1007\u1030\u101C\u102D\u102F\u1004\u103A",
        month8: "\u101E\u103C\u1002\u102F\u1010\u103A",
        month9: "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C",
        month10: "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C",
        month11: "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C",
        month12: "\u1012\u102E\u1007\u1004\u103A\u1018\u102C",
        week: "\u101B\u1000\u103A\u101E\u1010\u1039\u1010\u1015\u1010\u103A",
        weeks: {
          sun: "\u1014\u103D\u1031",
          mon: "\u101C\u102C",
          tue: "\u1002\u102B",
          wed: "\u101F\u1030\u1038",
          thu: "\u1000\u103C\u102C",
          fri: "\u101E\u1031\u102C",
          sat: "\u1014\u1031"
        },
        weeksFull: {
          sun: "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031",
          mon: "\u1010\u1014\u1004\u103A\u1039\u101C\u102C",
          tue: "\u1021\u1004\u103A\u1039\u1002\u102B",
          wed: "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038",
          thu: "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038",
          fri: "\u101E\u1031\u102C\u1000\u103C\u102C",
          sat: "\u1005\u1014\u1031"
        },
        months: {
          jan: "\u1007\u1014\u103A",
          feb: "\u1016\u1031",
          mar: "\u1019\u1010\u103A",
          apr: "\u1015\u103C\u102E",
          may: "\u1019\u1031",
          jun: "\u1007\u103D\u1014\u103A",
          jul: "\u101C\u102D\u102F\u1004\u103A",
          aug: "\u1029",
          sep: "\u1005\u1000\u103A",
          oct: "\u1021\u1031\u102C\u1000\u103A",
          nov: "\u1014\u102D\u102F",
          dec: "\u1012\u102E"
        }
      },
      inputNumber: {
        decrease: "\u1021\u101B\u1031\u1021\u1010\u103D\u1000\u103A\u101C\u103B\u103E\u1031\u102C\u1037\u1001\u103B",
        increase: "\u1021\u101B\u1031\u1021\u1010\u103D\u1000\u103A\u1010\u102D\u102F\u1038"
      },
      select: {
        loading: "\u101D\u1014\u103A\u1010\u1004\u103A\u1014\u1031\u101E\u100A\u103A",
        noMatch: "\u1000\u102D\u102F\u1000\u103A\u100A\u102E\u101E\u1031\u102C\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        noData: "\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        placeholder: "\u101B\u103D\u1031\u1038\u1015\u102B"
      },
      mention: {
        loading: "\u101D\u1014\u103A\u1010\u1004\u103A\u1014\u1031\u101E\u100A\u103A"
      },
      dropdown: {
        toggleDropdown: "Dropdown \u1005\u102C\u101B\u1004\u103A\u1038 \u1016\u103D\u1004\u103A\u1037/\u1015\u102D\u1010\u103A"
      },
      cascader: {
        noMatch: "\u1000\u102D\u102F\u1000\u103A\u100A\u102E\u101E\u1031\u102C\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        loading: "\u101D\u1014\u103A\u1010\u1004\u103A\u1014\u1031\u101E\u100A\u103A",
        placeholder: "\u101B\u103D\u1031\u1038\u1015\u102B",
        noData: "\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B"
      },
      pagination: {
        goto: "\u101E\u103D\u102C\u1038\u1019\u101A\u103A",
        pagesize: "/\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C",
        total: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 {total}",
        pageClassifier: "",
        page: "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C",
        prev: "\u101B\u103E\u1031\u1037\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C\u101E\u102D\u102F\u1037",
        next: "\u1014\u1031\u102C\u1000\u103A\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C\u101E\u102D\u102F\u1037",
        currentPage: "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C {pager}",
        prevPages: "\u101B\u103E\u1031\u1037\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C {pager} \u101E\u102D\u102F\u1037",
        nextPages: "\u1014\u1031\u102C\u1000\u103A\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C {pager} \u101E\u102D\u102F\u1037",
        deprecationWarning: "\u1000\u1014\u1037\u103A\u1000\u103D\u1000\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1019\u103E\u102F\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1010\u103D\u1031\u1037\u101B\u103E\u102D\u1015\u102B\u101E\u100A\u103A\u104B \u1021\u101E\u1031\u1038\u1005\u102D\u1010\u103A\u1021\u1001\u103B\u1000\u103A\u1021\u101C\u1000\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F el-pagination \u101B\u1032\u1037\u1005\u102C\u101B\u103D\u1000\u103A\u1005\u102C\u1010\u1019\u103A\u1038\u1010\u103D\u1004\u103A \u1016\u1010\u103A\u101B\u103E\u102F\u1015\u102B\u104B"
      },
      dialog: {
        close: "\u1024\u1012\u102D\u102F\u1004\u103A\u101A\u102C\u101C\u1031\u102C\u1037\u1002\u103A\u1000\u102D\u102F \u1015\u102D\u1010\u103A\u1015\u102B"
      },
      drawer: {
        close: "\u1024\u1012\u102D\u102F\u1004\u103A\u101A\u102C\u101C\u1031\u102C\u1037\u1002\u103A\u1000\u102D\u102F \u1015\u102D\u1010\u103A\u1015\u102B"
      },
      messagebox: {
        title: "\u1019\u1000\u103A\u1006\u1031\u1037\u1001\u103B\u103A",
        confirm: "\u1021\u102D\u102F\u1000\u1031",
        cancel: "\u1015\u101A\u103A\u1016\u103B\u1000\u103A",
        error: "\u1010\u101B\u102C\u1038\u1019\u101D\u1004\u103A\u1011\u100A\u1037\u103A\u101E\u103D\u1004\u103A\u1038\u1019\u103E\u102F",
        close: "\u1024\u1012\u102D\u102F\u1004\u103A\u101A\u102C\u101C\u1031\u102C\u1037\u1002\u103A\u1000\u102D\u102F \u1015\u102D\u1010\u103A\u1015\u102B"
      },
      upload: {
        deleteTip: "\u1016\u101A\u103A\u101B\u103E\u102C\u1038\u101B\u1014\u103A \u1016\u103B\u1000\u103A\u1019\u100A\u103A \u1000\u102D\u102F\u1014\u103E\u102D\u1015\u103A\u1015\u102B",
        delete: "\u1016\u103B\u1000\u103A\u1019\u100A\u103A",
        preview: "\u1021\u1005\u1019\u103A\u1038\u1000\u103C\u100A\u1037\u103A\u1019\u100A\u103A",
        continue: "\u101B\u103E\u1031\u1037\u1006\u1000\u103A\u1019\u100A\u103A"
      },
      slider: {
        defaultLabel: "{min} \u1014\u103E\u1004\u103A\u1037 {max} \u1000\u103C\u102C\u1038\u101B\u103E\u102D \u1006\u101C\u102D\u102F\u1000\u103A\u1012\u102B",
        defaultRangeStartLabel: "\u1005\u1010\u1004\u103A\u1010\u1014\u103A\u1016\u102D\u102F\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1015\u102B",
        defaultRangeEndLabel: "\u1021\u1006\u102F\u1036\u1038\u101E\u1010\u103A\u1010\u1014\u103A\u1016\u102D\u102F\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1015\u102B"
      },
      table: {
        emptyText: "\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        confirmFilter: "\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1019\u100A\u103A",
        resetFilter: "\u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u1010\u103A\u1019\u103E\u1010\u103A\u1019\u100A\u103A",
        clearFilter: "\u1021\u102C\u1038\u101C\u102F\u1036\u1038",
        sumText: "\u1015\u1031\u102B\u1004\u103A\u1038\u101C\u1012\u103A"
      },
      tour: {
        next: "\u1014\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037",
        previous: "\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037",
        finish: "\u1015\u103C\u102E\u1038\u1015\u103C\u102E"
      },
      tree: {
        emptyText: "\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B"
      },
      transfer: {
        noMatch: "\u1000\u102D\u102F\u1000\u103A\u100A\u102E\u101E\u1031\u102C\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        noData: "\u1012\u1031\u1010\u102C\u1019\u101B\u103E\u102D\u1015\u102B",
        titles: ["\u1005\u102C\u101B\u1004\u103A\u1038 \u1041", "\u1005\u102C\u101B\u1004\u103A\u1038 \u1042"],
        filterPlaceholder: "\u101E\u1031\u102C\u1037\u1001\u103B\u1000\u103A\u1005\u1000\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u101B\u102D\u102F\u1000\u103A\u1011\u100A\u1037\u103A\u1015\u102B",
        noCheckedFormat: "{total} \u1001\u102F",
        hasCheckedFormat: "{checked}/{total} \u101B\u103D\u1031\u1038\u1015\u103C\u102E\u1038"
      },
      image: {
        error: "\u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1015\u102B"
      },
      pageHeader: {
        title: "\u1015\u103C\u1014\u103A\u1019\u100A\u103A"
      },
      popconfirm: {
        confirmButtonText: "\u101F\u102F\u1010\u103A\u1000\u1032\u1037",
        cancelButtonText: "\u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1018\u1030\u1038"
      },
      carousel: {
        leftArrow: "\u1000\u102C\u101B\u1030\u1006\u101A\u103A \u1019\u103C\u102C\u1038 \u1018\u101A\u103A\u1018\u1000\u103A",
        rightArrow: "\u1000\u102C\u101B\u1030\u1006\u101A\u103A \u1019\u103C\u102C\u1038 \u100A\u102C\u1018\u1000\u103A",
        indicator: "\u1000\u102C\u101B\u1030\u1006\u101A\u103A \u1021\u100A\u103D\u103E\u1014\u103A\u1038 {index} \u101E\u102D\u102F\u1037 \u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101B\u1014\u103A"
      }
    }
  };

  return my;

}));
