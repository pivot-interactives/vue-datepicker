import{d as t,_ as r,u as a,r as c,o as i,c as p,a as u}from"./app.519dac2e.js";import{U as _}from"./vue-datepicker.es.e0a9f9bf.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l=t(()=>r(()=>import("./MonthYearCmp.eb12c806.js"),["assets/MonthYearCmp.eb12c806.js","assets/ChevronLeftIcon.ce5da71b.js","assets/app.519dac2e.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ChevronRightIcon.ca308293.js"])),k=t(()=>r(()=>import("./TimePickerCmp.212d1a54.js"),["assets/TimePickerCmp.212d1a54.js","assets/app.519dac2e.js","assets/plugin-vue_export-helper.21dcd24c.js"])),C=t(()=>r(()=>import("./ActionRowCmp.e7f86045.js"),["assets/ActionRowCmp.e7f86045.js","assets/app.519dac2e.js","assets/plugin-vue_export-helper.21dcd24c.js"])),h={components:{Datepicker:_},props:["useCustomMonthYear","useCustomTimePicker","useCustomActionRow"],data(){return{date:new Date,dark:!0}},mounted(){this.dark=a()},computed:{monthYearCmp(){return this.useCustomMonthYear?l:null},timePickerCmp(){return this.useCustomTimePicker?k:null},actionRowCmp(){return this.useCustomActionRow?C:null}}},f={class:"demo-wrap"};function w(D,n,P,R,e,o){const m=c("Datepicker");return i(),p("div",f,[u(m,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=s=>e.date=s),dark:e.dark,"month-year-component":o.monthYearCmp,"time-picker-component":o.timePickerCmp,"action-row-component":o.actionRowCmp},null,8,["modelValue","dark","month-year-component","time-picker-component","action-row-component"])])}var V=d(h,[["render",w]]);export{V as default};