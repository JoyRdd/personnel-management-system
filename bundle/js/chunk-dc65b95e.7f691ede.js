(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc65b95e"],{"52e6":function(e,t,i){},"58da":function(e,t,i){"use strict";i.r(t);i("87da");var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"top-style"},[t("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[t("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入员工名进行搜索，可以直接回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.initEmps},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmps.apply(null,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),t("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.initEmps}},[e._v(" 搜索 ")]),t("el-popover",{attrs:{width:"1050",placement:"right-end",trigger:"manual"},model:{value:e.showAdvanceSearchView,callback:function(t){e.showAdvanceSearchView=t},expression:"showAdvanceSearchView"}},[t("transition",{attrs:{name:"slide-fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearchView,expression:"showAdvanceSearchView"}],staticStyle:{border:"1px solid #409eff","border-radius":"5px","box-sizing":"border-box",padding:"5px",margin:"10px 0px"}},[t("el-row",[t("el-col",{attrs:{span:5}},[e._v(" 政治面貌: "),t("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"政治面貌"},model:{value:e.searchValue.politicid,callback:function(t){e.$set(e.searchValue,"politicid",t)},expression:"searchValue.politicid"}},e._l(e.politicsstatus,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-col",{attrs:{span:4}},[e._v(" 民族: "),t("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"民族"},model:{value:e.searchValue.nationid,callback:function(t){e.$set(e.searchValue,"nationid",t)},expression:"searchValue.nationid"}},e._l(e.nations,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-col",{attrs:{span:4}},[e._v(" 职位: "),t("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"职位"},model:{value:e.searchValue.posid,callback:function(t){e.$set(e.searchValue,"posid",t)},expression:"searchValue.posid"}},e._l(e.positions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-col",{attrs:{span:4}},[e._v(" 职称: "),t("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"职称"},model:{value:e.searchValue.joblevelid,callback:function(t){e.$set(e.searchValue,"joblevelid",t)},expression:"searchValue.joblevelid"}},e._l(e.joblevels,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-col",{attrs:{span:7}},[e._v(" 聘用形式: "),t("el-radio-group",{model:{value:e.searchValue.engageform,callback:function(t){e.$set(e.searchValue,"engageform",t)},expression:"searchValue.engageform"}},[t("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),t("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),t("el-row",{staticStyle:{"margin-top":"10px"}},[t("el-col",{attrs:{span:5}},[e._v(" 所属部门: "),t("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible1,callback:function(t){e.popVisible1=t},expression:"popVisible1"}},[t("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.searvhViewHandleNodeClick}}),t("div",{staticStyle:{width:"130px",display:"inline-flex","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer","align-items":"center","padding-left":"8px","box-sizing":"border-box","margin-left":"3px"},attrs:{slot:"reference"},on:{click:e.showDepView},slot:"reference"},[e._v(e._s(e.inputDepName)+" ")])],1)],1),t("el-col",{attrs:{span:10}},[e._v(" 入职日期: "),t("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchValue.beginDateScope,callback:function(t){e.$set(e.searchValue,"beginDateScope",t)},expression:"searchValue.beginDateScope"}})],1),t("el-col",{attrs:{span:5,offset:4}},[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initEmps("advanced")}}},[e._v("搜索")])],1)],1)],1)]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"primary"},on:{click:function(t){e.showAdvanceSearchView=!e.showAdvanceSearchView}},slot:"reference"},[t("i",{class:e.showAdvanceSearchView?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v(" 高级搜索 ")])],1)],1),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("el-upload",{staticStyle:{display:"inline-flex","margin-right":"8px"},attrs:{"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,disabled:e.importDataDisabled,action:"/employee/basic/import"}},[t("el-button",{attrs:{disabled:e.importDataDisabled,type:"success",icon:e.importDataBtnIcon}},[e._v(" "+e._s(e.importDataBtnText)+" ")])],1),t("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.exportData}},[e._v(" 导出数据 ")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddEmpView}},[e._v(" 添加用户 ")]),t("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",[t("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.rules}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[t("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入员工姓名"},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"性别:",prop:"gender"}},[t("el-radio-group",{model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[t("el-radio",{attrs:{label:"男"}},[e._v("男")]),t("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"出生日期:",prop:"birthday"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"出生日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"政治面貌:",prop:"politicid"}},[t("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"政治面貌"},model:{value:e.emp.politicid,callback:function(t){e.$set(e.emp,"politicid",t)},expression:"emp.politicid"}},e._l(e.politicsstatus,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"民族:",prop:"nationid"}},[t("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"民族"},model:{value:e.emp.nationid,callback:function(t){e.$set(e.emp,"nationid",t)},expression:"emp.nationid"}},e._l(e.nations,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"籍贯:",prop:"nativeplace"}},[t("el-input",{staticStyle:{width:"120px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入籍贯"},model:{value:e.emp.nativeplace,callback:function(t){e.$set(e.emp,"nativeplace",t)},expression:"emp.nativeplace"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"电子邮箱:",prop:"email"}},[t("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-message",placeholder:"请输入电子邮箱"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"联系地址:",prop:"address"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入联系地址"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"职位:",prop:"posid"}},[t("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"职位"},model:{value:e.emp.posid,callback:function(t){e.$set(e.emp,"posid",t)},expression:"emp.posid"}},e._l(e.positions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"职称:",prop:"joblevelid"}},[t("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"职称"},model:{value:e.emp.joblevelid,callback:function(t){e.$set(e.emp,"joblevelid",t)},expression:"emp.joblevelid"}},e._l(e.joblevels,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"所属部门:",prop:"departmentid"}},[t("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible,callback:function(t){e.popVisible=t},expression:"popVisible"}},[t("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),t("div",{staticStyle:{width:"150px",display:"inline-flex","font-size":"12px",border:"1px solid #dedede",height:"38px","border-radius":"5px",cursor:"pointer","align-items":"center","box-sizing":"border-box"},attrs:{slot:"reference"},on:{click:function(t){return e.showDepView1()}},slot:"reference"},[e._v(e._s(e.inputDepName)+" ")])],1)],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"电话号码:",prop:"phone"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-phone",placeholder:"电话号码"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"工号:",prop:"workid"}},[t("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"工号",disabled:""},model:{value:e.emp.workid,callback:function(t){e.$set(e.emp,"workid",t)},expression:"emp.workid"}})],1)],1),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"学历:",prop:"tiptopdegree"}},[t("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"学历"},model:{value:e.emp.tiptopdegree,callback:function(t){e.$set(e.emp,"tiptopdegree",t)},expression:"emp.tiptopdegree"}},e._l(e.tiptopDegrees,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"毕业院校:",prop:"school"}},[t("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"毕业院校名称"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"专业名称:",prop:"specialty"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入专业名称"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"入职日期:",prop:"begindate"}},[t("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"入职日期"},model:{value:e.emp.begindate,callback:function(t){e.$set(e.emp,"begindate",t)},expression:"emp.begindate"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"转正日期:",prop:"conversiontime"}},[t("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"转正日期"},model:{value:e.emp.conversiontime,callback:function(t){e.$set(e.emp,"conversiontime",t)},expression:"emp.conversiontime"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"合同起始日期:",prop:"begincontract"}},[t("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"合同起始日期"},model:{value:e.emp.begincontract,callback:function(t){e.$set(e.emp,"begincontract",t)},expression:"emp.begincontract"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"合同终止日期:",prop:"endcontract"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"合同终止日期"},model:{value:e.emp.endcontract,callback:function(t){e.$set(e.emp,"endcontract",t)},expression:"emp.endcontract"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"身份证号码:",prop:"idcard"}},[t("el-input",{staticStyle:{width:"180px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入身份证号码"},model:{value:e.emp.idcard,callback:function(t){e.$set(e.emp,"idcard",t)},expression:"emp.idcard"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"聘用形式:",prop:"engageform"}},[t("el-radio-group",{model:{value:e.emp.engageform,callback:function(t){e.$set(e.emp,"engageform",t)},expression:"emp.engageform"}},[t("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),t("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"婚姻状况:",prop:"wedlock"}},[t("el-radio-group",{model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[t("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),t("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")]),t("el-radio",{attrs:{label:"离异"}},[e._v("离异")])],1)],1)],1)],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.quxiao}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.doAddEmp}},[e._v("确 定")])],1)])],1)]),t("div",{staticClass:"content-style"},[t("el-scrollbar",{staticStyle:{height:"100%"}},[t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"100%",height:"695px"},attrs:{data:e.emps,stripe:"",border:"","max-height":"685","element-loading-spinner":"fa fa-spinner fa-pulse fa-3x fa-fw",customClass:e.loadingstyle},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{fixed:"",prop:"name",align:"left",label:"姓名",width:"100"}}),t("el-table-column",{attrs:{prop:"workid",fixed:"",label:"工号",align:"left",width:"85"}}),t("el-table-column",{attrs:{prop:"gender",label:"性别",align:"center",width:"50"}}),t("el-table-column",{attrs:{prop:"birthday",width:"95",align:"left",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"idcard",width:"150",align:"left",label:"身份证号码"}}),t("el-table-column",{attrs:{prop:"wedlock",width:"100",align:"left",label:"婚姻状况"}}),t("el-table-column",{attrs:{prop:"nation.name",width:"125",align:"left",label:"民族"}}),t("el-table-column",{attrs:{prop:"nativeplace",width:"100",align:"center",label:"籍贯"}}),t("el-table-column",{attrs:{prop:"politicsstatus.name",label:"政治面貌"}}),t("el-table-column",{attrs:{prop:"email",width:"180",align:"left",label:"电子邮件"}}),t("el-table-column",{attrs:{prop:"phone",width:"100",align:"left",label:"电话号码"}}),t("el-table-column",{attrs:{prop:"address",width:"250",align:"left",label:"联系地址"}}),t("el-table-column",{attrs:{prop:"department.name",width:"100",align:"left",label:"所属部门"}}),t("el-table-column",{attrs:{prop:"position.name",width:"100",label:"职位"}}),t("el-table-column",{attrs:{prop:"jobLevel.name",width:"100",label:"职称"}}),t("el-table-column",{attrs:{prop:"engageform",width:"100",align:"left",label:"聘用形式"}}),t("el-table-column",{attrs:{prop:"tiptopdegree",width:"80",align:"left",label:"最高学历"}}),t("el-table-column",{attrs:{prop:"specialty",width:"150",align:"left",label:"专业"}}),t("el-table-column",{attrs:{prop:"school",width:"150",align:"left",label:"毕业院校"}}),t("el-table-column",{attrs:{prop:"begindate",width:"95",align:"left",label:"入职日期"}}),t("el-table-column",{attrs:{prop:"conversiontime",width:"95",align:"left",label:"转正日期"}}),t("el-table-column",{attrs:{prop:"begincontract",width:"125",align:"left",label:"合同起始日期"}}),t("el-table-column",{attrs:{prop:"endcontract",width:"125",align:"left",label:"合同截止日期"}}),t("el-table-column",{attrs:{width:"100",align:"left",label:"合同期限"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-tag",{attrs:{size:"mini"}},[e._v(e._s(i.row.contractterm))]),e._v(" 年 ")]}}])}),t("el-table-column",{attrs:{fixed:"right",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{staticStyle:{padding:"3px"},on:{click:function(t){return e.showEditEmpView(i.row)}}},[e._v("编辑 ")]),t("el-button",{staticStyle:{padding:"3px"},attrs:{type:"danger"},on:{click:function(t){return e.deleteEmp(i.row)}}},[e._v(" 删除 ")])]}}])})],1)],1)])],1),t("div",{staticClass:"bottom-style"},[t("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"danger",disabled:0==e.multipleSelection.length},on:{click:e.deleteMany}},[e._v("批量删除 ")]),t("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total,"page-sizes":[13,33,333,,3333]},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)])},l=[],s=(i("7ec7"),i("938d"),i("ac25"),{name:"EmpBasic",data:function(){return{multipleSelection:[],searchValue:{politicid:null,nationid:null,joblevelid:null,posid:null,engageform:null,departmentid:null,beginDateScope:null},title:"",importDataBtnText:"导入数据",importDataBtnIcon:"el-icon-upload2",importDataDisabled:!1,showAdvanceSearchView:!1,allDeps:[],emps:[],loading:!1,popVisible:!1,popVisible1:!1,dialogVisible:!1,total:0,page:1,keyword:"",size:13,nations:[],joblevels:[],politicsstatus:[],positions:[],tiptopDegrees:["本科","大专","硕士","博士","高中","初中","小学","其他"],options:[{value:"",label:""}],inputDepName:"所属部门",emp:{id:"",name:"小明",gender:"男",birthday:"1995-10-08",idcard:"610122199001011256",wedlock:"已婚",nationid:1,nativeplace:"内蒙古",politicid:13,email:"1224965096@qq.com",phone:"18565558897",address:"内蒙古呼和浩特",departmentid:29,joblevelid:9,posid:29,engageform:"劳务合同",tiptopdegree:"本科",specialty:"信息与计算科学",school:"集宁师范学院",begindate:"2017-12-31",workstate:"在职",workid:"",contractterm:2,conversiontime:"2018-03-31",notworkdate:null,begincontract:"2017-12-31",endcontract:"2019-12-31",workage:null},defaultProps:{children:"children",label:"name"},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],birthday:[{required:!0,message:"请输入出生日期",trigger:"blur"}],idcard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"身份证号码格式不正确",trigger:"blur"}],wedlock:[{required:!0,message:"请输入婚姻状况",trigger:"blur"}],nationid:[{required:!0,message:"请输入民族",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],politicId:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],address:[{required:!0,message:"请输入员工地址",trigger:"blur"}],departmentid:[{required:!0,message:"请输入部门名称",trigger:"blur"}],joblevelid:[{required:!0,message:"请输入职称",trigger:"blur"}],posid:[{required:!0,message:"请输入职位",trigger:"blur"}],engageform:[{required:!0,message:"请输入聘用形式",trigger:"blur"}],tiptopdegree:[{required:!0,message:"请输入学历",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业",trigger:"blur"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],begindate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],workstate:[{required:!0,message:"请输入工作状态",trigger:"blur"}],workid:[{required:!0,message:"请输入工号",trigger:"blur"}],contractterm:[{required:!0,message:"请输入合同期限",trigger:"blur"}],conversiontime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],notworkdate:[{required:!0,message:"请输入离职日期",trigger:"blur"}],begincontract:[{required:!0,message:"请输入合同起始日期",trigger:"blur"}],endcontract:[{required:!0,message:"请输入合同结束日期",trigger:"blur"}],workage:[{required:!0,message:"请输入工龄",trigger:"blur"}]}}},mounted:function(){this.initEmps(),this.initData(),this.initPositions()},methods:{quxiao:function(){this.dialogVisible=!1,this.$notify.info({title:"修改讯息",message:"以 取 消 操作 ",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"})},deleteMany:function(){var e=this;this.$confirm("此操作将永久删除【"+this.multipleSelection.length+"】条记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$notify.success({title:"删除讯息",message:"删 除 员 工 中...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"});var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.id+"&"})),e.deleteRequest("/employee/basic/many/"+t).then((function(t){t&&e.initEmps()}))})).catch((function(){e.$notify.info({title:"删除讯息",message:"以 取 消 删 除 ",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"})}))},handleSelectionChange:function(e){this.multipleSelection=e},searvhViewHandleNodeClick:function(e){this.inputDepName=e.name,this.searchValue.departmentid=e.id,this.popVisible1=!this.popVisible1},onError:function(){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1},onSuccess:function(){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1,this.$notify.success({title:"上传讯息",message:"上传成功...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"}),this.initEmps()},beforeUpload:function(){this.importDataBtnText="正在导入",this.importDataBtnIcon="fa fa-circle-o-notch fa-spin  fa-fw",this.importDataDisabled=!0},exportData:function(){window.open("/employee/basic/export","_parent")},emptyEmp:function(){this.emp={id:"",name:"小明",gender:"男",birthday:"1995-10-08",idcard:"610122199001011256",wedlock:"已婚",nationid:1,nativeplace:"内蒙古",politicid:13,email:"1224965096@qq.com",phone:"18565558897",address:"内蒙古呼和浩特",departmentid:8,joblevelid:9,posid:29,engageform:"劳务合同",tiptopdegree:"本科",specialty:"信息与计算科学",school:"集宁师范学院",begindate:"2017-12-31",workstate:"在职",workid:"",contractterm:2,conversiontime:"2018-03-31",notworkdate:null,begincontract:"2017-12-31",endcontract:"2019-12-31",workage:null},this.inputDepName=""},showEditEmpView:function(e){this.initPositions(),this.title="编辑员工信息",this.emp=e,this.inputDepName=e.department.name,this.dialogVisible=!0},deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$notify.success({title:"删除讯息",message:"删 除 员 工 中...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"}),t.deleteRequest("/employee/basic/"+e.id).then((function(e){e&&t.initEmps()}))})).catch((function(){t.$notify.info({title:"删除讯息",message:"以 取 消 删 除 ",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"})}))},doAddEmp:function(){var e=this;this.emp.id?this.$refs["empForm"].validate((function(t){t&&(e.$notify.success({title:"修改讯息",message:" 修 改 员 工 中...",showClose:!1,offset:100,duration:2e3,customClass:"fontclass"}),e.putRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())})))})):this.$refs["empForm"].validate((function(t){t&&(e.$notify.success({title:"添加讯息",message:"添 加 员 工 中...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"}),e.postRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())})))}))},handleNodeClick:function(e){this.inputDepName=e.name,this.emp.departmentid=e.id,this.popVisible=!this.popVisible},showDepView:function(){this.popVisible1=!this.popVisible1},showDepView1:function(){this.popVisible=!this.popVisible},initPositions:function(){var e=this;this.getRequest("/employee/basic/positions").then((function(t){t&&(e.positions=t)}))},getMaxWordID:function(){var e=this;this.getRequest("/employee/basic/maxWorkID").then((function(t){t&&(e.emp.workid=t.obj)}))},initData:function(){var e=this;window.sessionStorage.getItem("nations")?this.nations=JSON.parse(window.sessionStorage.getItem("nations")):this.getRequest("/employee/basic/nations").then((function(t){t&&(e.nations=t,window.sessionStorage.setItem("nations",JSON.stringify(t)))})),window.sessionStorage.getItem("joblevels")?this.joblevels=JSON.parse(window.sessionStorage.getItem("joblevels")):this.getRequest("/employee/basic/joblevels").then((function(t){t&&(e.joblevels=t,window.sessionStorage.setItem("joblevels",JSON.stringify(t)))})),window.sessionStorage.getItem("politicsstatus")?this.politicsstatus=JSON.parse(window.sessionStorage.getItem("politicsstatus")):this.getRequest("/employee/basic/politicsstatus").then((function(t){t&&(e.politicsstatus=t,window.sessionStorage.setItem("politicsstatus",JSON.stringify(t)))})),window.sessionStorage.getItem("deps")?this.allDeps=JSON.parse(window.sessionStorage.getItem("deps")):this.getRequest("/employee/basic/deps").then((function(t){t&&(e.allDeps=t,window.sessionStorage.setItem("deps",JSON.stringify(t)))}))},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.page=e,this.initEmps()},showAddEmpView:function(){this.emptyEmp(),this.title="添加员工",this.getMaxWordID(),this.dialogVisible=!0},initEmps:function(e){var t=this;this.loading=!0;var i="/employee/basic/?page="+this.page+"&size="+this.size;e&&"advanced"==e?(this.$notify.success({title:"搜索讯息",message:"搜 索 员 工 中...",showClose:!1,offset:100,duration:2e3,customClass:"fontclass"}),this.searchValue.politicid&&(i+="&politicid="+this.searchValue.politicid),this.searchValue.nationid&&(i+="&nationid="+this.searchValue.nationid),this.searchValue.joblevelid&&(i+="&joblevelid="+this.searchValue.joblevelid),this.searchValue.posid&&(i+="&posid="+this.searchValue.posid),this.searchValue.engageform&&(i+="&engageform="+this.searchValue.engageform),this.searchValue.departmentid&&(i+="&departmentid="+this.searchValue.departmentid),this.searchValue.beginDateScope&&(i+="&beginDateScope="+this.searchValue.beginDateScope)):this.keyword&&(this.$notify.success({title:"搜索讯息",message:"搜 索 员 工 中...",showClose:!1,offset:100,duration:2e3,customClass:"fontclass"}),i+="&name="+this.keyword),this.$notify.success({title:"系统讯息",message:"基 本 信 息 加 载 中...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"}),this.getRequest(i).then((function(e){t.loading=!1,e&&(t.emps=e.data,t.total=e.total,t.searchValue=[],t.keyword="")}))}}}),o=s,n=(i("9e0d"),i("e607")),r=Object(n["a"])(o,a,l,!1,null,null,null);t["default"]=r.exports},8759:function(e,t,i){"use strict";i.r(t);i("87da");var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"top-style"},[t("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[t("el-input",{staticStyle:{width:"250px","margin-right":"10px"},attrs:{placeholder:"请输入员工名进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.initEmps},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmps.apply(null,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),t("el-select",{staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:"政治面貌"},model:{value:e.searchValue.politicid,callback:function(t){e.$set(e.searchValue,"politicid",t)},expression:"searchValue.politicid"}},e._l(e.politicsstatus,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-select",{staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:"民族"},model:{value:e.searchValue.nationid,callback:function(t){e.$set(e.searchValue,"nationid",t)},expression:"searchValue.nationid"}},e._l(e.nations,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-select",{staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:"职位"},model:{value:e.searchValue.posid,callback:function(t){e.$set(e.searchValue,"posid",t)},expression:"searchValue.posid"}},e._l(e.positions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-select",{staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:"职称"},model:{value:e.searchValue.joblevelid,callback:function(t){e.$set(e.searchValue,"joblevelid",t)},expression:"searchValue.joblevelid"}},e._l(e.joblevels,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"入职开始日期","end-placeholder":"入职结束日期"},model:{value:e.searchValue.beginDateScope,callback:function(t){e.$set(e.searchValue,"beginDateScope",t)},expression:"searchValue.beginDateScope"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initEmps("advanced")}}},[e._v("搜索")])],1),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}})]),t("div",{staticClass:"content-style"},[t("el-scrollbar",{staticStyle:{height:"100%"}},[t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"100%",height:"695px"},attrs:{data:e.emps,stripe:"",border:"","max-height":"685","element-loading-spinner":"fa fa-spinner fa-pulse fa-3x fa-fw"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{fixed:"",prop:"name",align:"left",label:"姓名",width:"100"}}),t("el-table-column",{attrs:{prop:"workid",fixed:"",label:"工号",align:"left",width:"85"}}),t("el-table-column",{attrs:{label:"培训信息"}},[t("el-table-column",{attrs:{prop:"employeetrainList.traincontent",align:"left",label:"培训内容"}}),t("el-table-column",{attrs:{prop:"employeetrainList.trainstartdate",align:"left",width:"110",label:"培训开始时间"}}),t("el-table-column",{attrs:{prop:"employeetrainList.trainfinishdate",align:"left",width:"110",label:"培训结束时间"}})],1),t("el-table-column",{attrs:{label:"考评信息"}},[t("el-table-column",{attrs:{prop:"appraise.appcontent",align:"left",label:"考评内容"}}),t("el-table-column",{attrs:{prop:"appraise.appdate",align:"left",width:"110",label:"考评时间"}})],1),t("el-table-column",{attrs:{label:"工资信息"}},[t("el-table-column",{attrs:{width:"200",prop:"salary.name",label:"账套名称"}}),t("el-table-column",{attrs:{width:"100",prop:"salary.basicsalary",label:"基本工资"}})],1)],1)],1)])],1),t("div",{staticClass:"bottom-style"},[t("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total,"page-sizes":[13,33,333,,3333]},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)])},l=[],s=(i("ac25"),{name:"EmpAdv",data:function(){return{multipleSelection:[],searchValue:{politicid:null,nationid:null,joblevelid:null,posid:null,engageform:null,departmentid:null,beginDateScope:null},title:"",importDataBtnText:"导入数据",importDataBtnIcon:"el-icon-upload2",importDataDisabled:!1,showAdvanceSearchView:!1,allDeps:[],emps:[],loading:!1,popVisible:!1,popVisible1:!1,dialogVisible:!1,total:0,page:1,keyword:"",size:13,nations:[],joblevels:[],politicsstatus:[],positions:[],tiptopDegrees:["本科","大专","硕士","博士","高中","初中","小学","其他"],options:[{value:"",label:""}],inputDepName:"所属部门",defaultProps:{children:"children",label:"name"}}},mounted:function(){this.initEmps(),this.initData(),this.initPositions()},methods:{handleSelectionChange:function(e){this.multipleSelection=e},searvhViewHandleNodeClick:function(e){this.inputDepName=e.name,this.searchValue.departmentid=e.id,this.popVisible1=!this.popVisible1},exportData:function(){window.open("/employee/basic/export","_parent")},showEditEmpView:function(e){this.initPositions(),this.title="编辑员工信息",this.emp=e,this.inputDepName=e.department.name,this.dialogVisible=!0},handleNodeClick:function(e){this.inputDepName=e.name,this.emp.departmentid=e.id,this.popVisible=!this.popVisible},showDepView:function(){this.popVisible1=!this.popVisible1},showDepView1:function(){this.popVisible=!this.popVisible},initPositions:function(){var e=this;this.getRequest("/employee/basic/positions").then((function(t){t&&(e.positions=t)}))},getMaxWordID:function(){var e=this;this.getRequest("/employee/basic/maxWorkID").then((function(t){t&&(e.emp.workid=t.obj)}))},initData:function(){var e=this;window.sessionStorage.getItem("nations")?this.nations=JSON.parse(window.sessionStorage.getItem("nations")):this.getRequest("/employee/basic/nations").then((function(t){t&&(e.nations=t,window.sessionStorage.setItem("nations",JSON.stringify(t)))})),window.sessionStorage.getItem("joblevels")?this.joblevels=JSON.parse(window.sessionStorage.getItem("joblevels")):this.getRequest("/employee/basic/joblevels").then((function(t){t&&(e.joblevels=t,window.sessionStorage.setItem("joblevels",JSON.stringify(t)))})),window.sessionStorage.getItem("politicsstatus")?this.politicsstatus=JSON.parse(window.sessionStorage.getItem("politicsstatus")):this.getRequest("/employee/basic/politicsstatus").then((function(t){t&&(e.politicsstatus=t,window.sessionStorage.setItem("politicsstatus",JSON.stringify(t)))})),window.sessionStorage.getItem("deps")?this.allDeps=JSON.parse(window.sessionStorage.getItem("deps")):this.getRequest("/employee/basic/deps").then((function(t){t&&(e.allDeps=t,window.sessionStorage.setItem("deps",JSON.stringify(t)))}))},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.page=e,this.initEmps()},showAddEmpView:function(){this.emptyEmp(),this.title="添加员工",this.getMaxWordID(),this.dialogVisible=!0},initEmps:function(){var e=this;this.loading=!0;var t="/employee/advanced/?page="+this.page+"&size="+this.size;this.searchValue,this.searchValue.politicid&&(t+="&politicid="+this.searchValue.politicid),this.searchValue.nationid&&(t+="&nationid="+this.searchValue.nationid),this.searchValue.joblevelid&&(t+="&joblevelid="+this.searchValue.joblevelid),this.searchValue.posid&&(t+="&posid="+this.searchValue.posid),this.searchValue.engageform&&(t+="&engageform="+this.searchValue.engageform),this.searchValue.departmentid&&(t+="&departmentid="+this.searchValue.departmentid),this.searchValue.beginDateScope&&(t+="&beginDateScope="+this.searchValue.beginDateScope),this.keyword&&(this.$notify.success({title:"搜索讯息",message:"搜 索 员 工 中...",showClose:!1,offset:100,duration:2e3,customClass:"fontclass"}),t+="&name="+this.keyword),this.$notify.success({title:"系统讯息",message:"高 级 信 息 加 载 中...",showClose:!1,offset:100,duration:4e3,customClass:"fontclass"}),this.getRequest(t).then((function(t){e.loading=!1,t&&(e.emps=t.data,e.total=t.total,e.searchValue=[],e.keyword="")}))}}}),o=s,n=(i("8909"),i("e607")),r=Object(n["a"])(o,a,l,!1,null,null,null);t["default"]=r.exports},8909:function(e,t,i){"use strict";i("e268")},"9e0d":function(e,t,i){"use strict";i("52e6")},e268:function(e,t,i){}}]);
//# sourceMappingURL=chunk-dc65b95e.7f691ede.js.map