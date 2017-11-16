< script type = "text/javascript" > $(function() {
	storage = $.localStorage;
	if (!storage) storage = $.cookieStorage;
	$('#paotuiCustomerList').datagrid({
		idField: 'id',
		title: '客户表',
		url: 'paotuiCustomerController.do?datagrid&field=id,createName,createBy,createDate,updateName,updateBy,updateDate,phone,balance,pOrdernum,tOrdernum,imgPath,realName,idCard,picBoth,picFace,picBack,point,isPaotui,shenhe,',
		fit: true,
		queryParams: {},
		loadMsg: '数据加载中...',
		pageSize: 10,
		pagination: true,
		pageList: [10, 20, 30],
		sortOrder: 'asc',
		rownumbers: true,
		singleSelect: false,
		fitColumns: false,
		striped: true,
		showFooter: true,
		frozenColumns: [
			[{
				field: 'ck',
				checkbox: 'true'
			}, ]
		],
		columns: [
			[{
				field: 'id',
				title: '主键',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'createName',
				title: '创建人名称',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'createBy',
				title: '创建人登录名称',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'createDate',
				title: '注册时间',
				width: 120,
				sortable: true,
				formatter: function(value, rec, index) {
					return new Date().format('yyyy-MM-dd', value);
				}
			}, {
				field: 'updateName',
				title: '更新人名称',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'updateBy',
				title: '更新人登录名称',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'updateDate',
				title: '更新日期',
				width: 120,
				hidden: true,
				sortable: true,
				formatter: function(value, rec, index) {
					return new Date().format('yyyy-MM-dd', value);
				}
			}, {
				field: 'phone',
				title: '手机号',
				width: 120,
				sortable: true
			}, {
				field: 'balance',
				title: '余额',
				width: 120,
				sortable: true,
				styler: function(value, rec, index) {
					return 'color:red'
				}
			}, {
				field: 'pOrdernum',
				title: '下单次数',
				width: 120,
				sortable: true
			}, {
				field: 'tOrdernum',
				title: '接单次数',
				width: 120,
				sortable: true
			}, {
				field: 'imgPath',
				title: '头像地址',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'realName',
				title: '真实姓名',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'idCard',
				title: '身份证号',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'picBoth',
				title: '手持身份证照片',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'picFace',
				title: '身份证正面照',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'picBack',
				title: '身份证反面照',
				width: 120,
				hidden: true,
				sortable: true
			}, {
				field: 'point',
				title: '积分',
				width: 120,
				sortable: true
			}, {
				field: 'isPaotui',
				title: '是否是自由快递人',
				width: 120,
				sortable: true,
				formatter: function(value, rec, index) {
					if (value == undefined) return '';
					var valArray = value.split(',');
					if (valArray.length > 1) {
						var checkboxValue = '';
						for (var k = 0; k < valArray.length; k++) {
							if (valArray[k] == '1') {
								checkboxValue = checkboxValue + '是' + ',';
							}
							if (valArray[k] == '2') {
								checkboxValue = checkboxValue + '不是' + ',';
							}
							if (valArray[k] == '3') {
								checkboxValue = checkboxValue + '正在申请' + ',';
							}
						}
						return checkboxValue.substring(0, checkboxValue.length - 1);
					} else {
						if (value == '1') {
							return '是';
						}
						if (value == '2') {
							return '不是';
						}
						if (value == '3') {
							return '正在申请';
						} else {
							return value;
						}
					}
				}
			}, {
				field: 'shenhe',
				title: '审核状态',
				width: 120,
				sortable: true
			}, {
				field: 'opt',
				title: '操作',
				width: 100,
				formatter: function(value, rec, index) {
					if (!rec.id) {
						return '';
					}
					var href = '';
					href += "[<a href='#' onclick=addOneTab('下单明细','ptOrderController.do?list&phone=" + rec.phone + "')>";
					href += "下单明细</a>]";
					href += "[<a href='#' onclick=addOneTab('接单明细','ptOrderController.do?list&phone=" + rec.phone + "')>";
					href += "接单明细</a>]";
					href += "[<a href='#' onclick=delObj('paotuiCustomerController.do?doDel&id=" + rec.id + "','paotuiCustomerList')>";
					href += "删除</a>]";
					return href;
				}
			}]
		],
		onLoadSuccess: function(data) {
			$("#paotuiCustomerList").datagrid("clearSelections");
			ok(data);
		},
		onClickRow: function(rowIndex, rowData) {
			rowid = rowData.id;
			gridname = 'paotuiCustomerList';
		}
	});
	$('#paotuiCustomerList').datagrid('getPager').pagination({
		beforePageText: '',
		afterPageText: '/{pages}',
		displayMsg: '{from}-{to}共 {total}条',
		showPageList: true,
		showRefresh: true
	});
	$('#paotuiCustomerList').datagrid('getPager').pagination({
		onBeforeRefresh: function(pageNumber, pageSize) {
			$(this).pagination('loading');
			$(this).pagination('loaded');
		}
	});
	try {
		restoreheader();
	} catch (ex) {}
});

function reloadTable() {
	try {
		$('#' + gridname).datagrid('reload');
		$('#' + gridname).treegrid('reload');
	} catch (ex) {}
}

function reloadpaotuiCustomerList() {
	$('#paotuiCustomerList').datagrid('reload');
}

function getpaotuiCustomerListSelected(field) {
	return getSelected(field);
}

function getSelected(field) {
	var row = $('#' + gridname).datagrid('getSelected');
	if (row != null) {
		value = row[field];
	} else {
		value = '';
	}
	return value;
}

function getpaotuiCustomerListSelections(field) {
	var ids = [];
	var rows = $('#paotuiCustomerList').datagrid('getSelections');
	for (var i = 0; i < rows.length; i++) {
		ids.push(rows[i][field]);
	}
	ids.join(',');
	return ids
};

function getSelectRows() {
	return $('#paotuiCustomerList').datagrid('getChecked');
}

function saveHeader() {
	var columnsFields = null;
	var easyextends = false;
	try {
		columnsFields = $('#paotuiCustomerList').datagrid('getColumns');
		easyextends = true;
	} catch (e) {
		columnsFields = $('#paotuiCustomerList').datagrid('getColumnFields');
	}
	var cols = storage.get('paotuiCustomerListhiddenColumns');
	var init = true;
	if (cols) {
		init = false;
	}
	var hiddencolumns = [];
	for (var i = 0; i < columnsFields.length; i++) {
		if (easyextends) {
			hiddencolumns.push({
				field: columnsFields[i].field,
				hidden: columnsFields[i].hidden
			});
		} else {
			var columsDetail = $('#paotuiCustomerList').datagrid("getColumnOption", columnsFields[i]);
			if (init) {
				hiddencolumns.push({
					field: columsDetail.field,
					hidden: columsDetail.hidden,
					visible: (columsDetail.hidden == true ? false : true)
				});
			} else {
				for (var j = 0; j < cols.length; j++) {
					if (cols[j].field == columsDetail.field) {
						hiddencolumns.push({
							field: columsDetail.field,
							hidden: columsDetail.hidden,
							visible: cols[j].visible
						});
					}
				}
			}
		}
	}
	storage.set('paotuiCustomerListhiddenColumns', JSON.stringify(hiddencolumns));
}

function isShowBut() {
	var isShowSearchId = $('#isShowSearchId').val();
	if (isShowSearchId == "true") {
		$("#searchColums").hide();
		$('#isShowSearchId').val("false");
		$('#columsShow').remove("src");
		$('#columsShow').attr("src", "plug-in/easyui/themes/default/images/accordion_expand.png");
	} else {
		$("#searchColums").show();
		$('#isShowSearchId').val("true");
		$('#columsShow').remove("src");
		$('#columsShow').attr("src", "plug-in/easyui/themes/default/images/accordion_collapse.png");
	}
}

function restoreheader() {
	var cols = storage.get('paotuiCustomerListhiddenColumns');
	if (!cols) return;
	for (var i = 0; i < cols.length; i++) {
		try {
			if (cols.visible != false) $('#paotuiCustomerList').datagrid((cols[i].hidden == true ? 'hideColumn' : 'showColumn'), cols[i].field);
		} catch (e) {}
	}
}

function resetheader() {
	var cols = storage.get('paotuiCustomerListhiddenColumns');
	if (!cols) return;
	for (var i = 0; i < cols.length; i++) {
		try {
			$('#paotuiCustomerList').datagrid((cols.visible == false ? 'hideColumn' : 'showColumn'), cols[i].field);
		} catch (e) {}
	}
}

function paotuiCustomerListsearch() {
	try {
		if (!$("#paotuiCustomerListForm").Validform({
				tiptype: 3
			}).check()) {
			return false;
		}
	} catch (e) {}
	if (true) {
		var queryParams = $('#paotuiCustomerList').datagrid('options').queryParams;
		$('#paotuiCustomerListtb').find('*').each(function() {
			queryParams[$(this).attr('name')] = $(this).val();
		});
		$('#paotuiCustomerList').datagrid({
			url: 'paotuiCustomerController.do?datagrid&field=id,createName,createBy,createDate,updateName,updateBy,updateDate,phone,balance,pOrdernum,tOrdernum,imgPath,realName,idCard,picBoth,picFace,picBack,point,isPaotui,shenhe,',
			pageNumber: 1
		});
	}
}

function dosearch(params) {
	var jsonparams = $.parseJSON(params);
	$('#paotuiCustomerList').datagrid({
		url: 'paotuiCustomerController.do?datagrid&field=id,createName,createBy,createDate,updateName,updateBy,updateDate,phone,balance,pOrdernum,tOrdernum,imgPath,realName,idCard,picBoth,picFace,picBack,point,isPaotui,shenhe,',
		queryParams: jsonparams
	});
}

function paotuiCustomerListsearchbox(value, name) {
	var queryParams = $('#paotuiCustomerList').datagrid('options').queryParams;
	queryParams[name] = value;
	queryParams.searchfield = name;
	$('#paotuiCustomerList').datagrid('reload');
}
$('#paotuiCustomerListsearchbox').searchbox({
	searcher: function(value, name) {
		paotuiCustomerListsearchbox(value, name);
	},
	menu: '#paotuiCustomerListmm',
	prompt: '请输入查询关键字'
});

function EnterPress(e) {
	var e = e || window.event;
	if (e.keyCode == 13) {
		paotuiCustomerListsearch();
	}
}

function searchReset(name) {
	$("#" + name + "tb").find(":input").val("");
	var queryParams = $('#paotuiCustomerList').datagrid('options').queryParams;
	$('#paotuiCustomerListtb').find('*').each(function() {
		queryParams[$(this).attr('name')] = $(this).val();
	});
	$('#paotuiCustomerList').datagrid({
		url: 'paotuiCustomerController.do?datagrid&field=id,createName,createBy,createDate,updateName,updateBy,updateDate,phone,balance,pOrdernum,tOrdernum,imgPath,realName,idCard,picBoth,picFace,picBack,point,isPaotui,shenhe,',
		pageNumber: 1
	});
} < /script>