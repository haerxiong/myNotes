< script type = "text/javascript"
src = "plug-in/mutiLang/zh-cn.js" > < /script> < script type = "text/javascript"
src = "plug-in/jquery/jquery-1.8.3.js" > < /script> < script type = "text/javascript"
src = "plug-in/jquery/jquery.cookie.js" > < /script> < script type = "text/javascript"
src = "plug-in/jquery-plugs/storage/jquery.storageapi.min.js" > < /script> < script type = "text/javascript"
src = "plug-in/tools/dataformat.js" > < /script> < link id = "easyuiTheme"
rel = "stylesheet"
href = "plug-in/easyui/themes/metrole/easyui.css"
type = "text/css" > < /link> < link id = "easyuiTheme"
rel = "stylesheet"
href = "plug-in/easyui/themes/metrole/main.css"
type = "text/css" > < /link> < link id = "easyuiTheme"
rel = "stylesheet"
href = "plug-in/easyui/themes/metrole/icon.css"
type = "text/css" > < /link> < link rel = "stylesheet"
type = "text/css"
href = "plug-in/accordion/css/accordion.css" > < link rel = "stylesheet"
type = "text/css"
href = "plug-in/accordion/css/icons.css" > < script type = "text/javascript"
src = "plug-in/easyui/jquery.easyui.min.1.3.2.js" > < /script> < script type = "text/javascript"
src = "plug-in/easyui/locale/zh-cn.js" > < /script> < script type = "text/javascript"
src = "plug-in/tools/syUtil.js" > < /script> < script type = "text/javascript"
src = "plug-in/easyui/extends/datagrid-scrollview.js" > < /script> < script type = "text/javascript"
src = "plug-in/My97DatePicker/WdatePicker.js" > < /script> < link rel = "stylesheet"
href = "plug-in/tools/css/metrole/common.css"
type = "text/css" > < /link> < script type = "text/javascript"
src = "plug-in/lhgDialog/lhgdialog.min.js?skin=metrole" > < /script> < script type = "text/javascript"
src = "plug-in/ace/js/bootstrap-tab.js" > < /script> < script type = "text/javascript"
src = "plug-in/tools/curdtools_zh-cn.js" > < /script> < script type = "text/javascript"
src = "plug-in/tools/easyuiextend.js" > < /script> < script type = "text/javascript"
src = "plug-in/jquery-plugs/hftable/jquery-hftable.js" > < /script> < script type = "text/javascript"
src = "plug-in/tools/json2.js" > < /script>

//main js

< link rel = "stylesheet"
href = "plug-in/Validform/css/style.css"
type = "text/css" >
	< link rel = "stylesheet"
href = "plug-in/Validform/css/tablefrom.css"
type = "text/css" >
	< script type = "text/javascript"
src = "plug-in/Validform/js/Validform_v5.3.1_min_zh-cn.js" > < /script> < script type = "text/javascript"
src = "plug-in/Validform/js/Validform_Datatype_zh-cn.js" > < /script> < script type = "text/javascript"
src = "plug-in/Validform/js/datatype_zh-cn.js" > < /script>

< script src = "webpage/com/jeecg/customer/paotuiCustomerList.js" > < /script>

< script type = "text/javascript" >
	function ok() {
		$(".datagrid-cell-c1-balance").each(function(i, e) {
			if (e.innerHTML > 3000) {
				e.style.color = "green";
			}
		});

		$(".datagrid-cell-c1-isPaotui").each(function(i, e) {
			if (e.innerHTML == '正在申请') {
				e.style.color = "green";
			} else if (e.innerHTML == '不是') {
				e.style.color = "red";
				$(e).append("<img src='https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a1.png'/>");
			}
		});

	}

$(document).ready(function() {
	//给时间控件加上样式
	$("#paotuiCustomerListtb").find("input[name='createDate']").attr("class", "Wdate").click(function() {
		WdatePicker({
			dateFmt: 'yyyy-MM-dd'
		});
	});
	$("#paotuiCustomerListtb").find("input[name='updateDate']").attr("class", "Wdate").click(function() {
		WdatePicker({
			dateFmt: 'yyyy-MM-dd'
		});
	});
});



//导入
function ImportXls() {
	openuploadwin('Excel导入', 'paotuiCustomerController.do?upload', "paotuiCustomerList");
}

//导出
function ExportXls() {
	JeecgExcelExport("paotuiCustomerController.do?exportXls", "paotuiCustomerList");
}

//模板下载
function ExportXlsByT() {
	JeecgExcelExport("paotuiCustomerController.do?exportXlsByT", "paotuiCustomerList");
} < /script>