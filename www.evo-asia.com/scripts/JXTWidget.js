﻿var IsDynamicWidget = "1"; $(document).ready(function () { $("#locationID1").change(function () { $(".divSalaryCurrency1").html($("#locationID1 option:selected").data("placeholdertag") + " "); var a = $("#locationID1 option:selected").val() < 1; "1" != $("#hfCountryCount").val() && ($("#salaryID1").prop("disabled", a), $("#salarylowerband1").prop("disabled", a), $("#salaryupperband1").prop("disabled", a)) }), $("#locationID1").change(), $("#professionID1").change(function () { $("#divRoleID1").html("<img src='/images/loading.gif' alt='loading'/>"); var a = ""; $("#professionID1 option:selected").each(function () { a += $(this).val() }), $.ajax({ type: "POST", cache: !1, url: "/job/ajaxcalls/ajaxmethods.asmx/GetRoles", data: "{'ProfessionId':" + a + ", 'IsDynamicWidget':" + IsDynamicWidget + "}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { $("#divRoleID1").replaceWith(a.d) }, fail: function () { $("#divRoleID1").html("It didn't work") } }) }), $("#salaryID1").change(function () { $("#salaryID1 option:selected").each(function () { $(this).val() }), $("#salarylowerband1").val(""), $("#salaryupperband1").val(""), $("#salarylowerband1").focus() }), $("#countryID1").change(function () { $("#divLocation1").html("<img src='/images/loading.gif' alt='loading'/>"); var a = ""; $("#countryID1 option:selected").each(function () { a += $(this).val() }), $.ajax({ type: "POST", cache: !1, url: "/job/ajaxcalls/ajaxmethods.asmx/GetLocations", data: "{'CountryID':" + a + ", 'DefaultLocationID':-1, 'IsDynamicWidget':" + IsDynamicWidget + "}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { $("#divLocation1").html(a.d) }, fail: function () { $("#divLocation1").html("It didn't work") } }), $.ajax({ type: "POST", cache: !1, url: "/job/ajaxcalls/ajaxmethods.asmx/GetAreas", data: "{'LocationId':-1, 'IsDynamicWidget':" + IsDynamicWidget + "}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { $("#divArea1").html(a.d) }, fail: function () { $("#divArea1").html("It didn't work") } }), $.ajax({ type: "POST", cache: !1, url: "/job/ajaxcalls/ajaxmethods.asmx/GetAreasDropDown", data: "{'LocationId':-1, 'IsDynamicWidget':" + IsDynamicWidget + "}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { $("#divAreaDropDown1").html(a.d) }, fail: function () { $("#divAreaDropDown1").html("It didn't work") } }) }) }); var strValue = "?search=1"; function WidgetJobSearch(a) { if (null == a && (a = ""), strValue = "?search=1", GetValues1("keywords1"), GetValues1("professionID1"), GetValues1("roleIDs1"), GetValues1("countryID1"), GetValues1("locationID1"), GetValues1("areaIDs1"), GetValues1("companyname1"), GetValues1("salaryID1"), GetValues1("salarylowerband1"), GetValues1("salaryupperband1"), GetValues1("workTypeID1"), GetValues1("advertiserid1"), GetValues1("googlemapaddress1"), GetValues1("radius1"), GetValues1("proposedstartdate1"), GetValues1("proposedenddate1"), strValue.indexOf("&", 0) < 1) { var e = a + "/advancedsearch.aspx?search=1"; window.open(e, "_top") } else { var t = (e = a + "/advancedsearch.aspx") + strValue; window.open(t, "_top") } } function GetValues1(a) { var e = $.trim($("#" + a).val()); "" != e && "-1" != e && "0" != e && (strValue = "salarylowerband1" == a || "salaryupperband1" == a ? strValue + "&" + a.replace("1", "") + "=1;" + encodeURIComponent(e) : strValue + "&" + a.replace("1", "") + "=" + encodeURIComponent(e)) }