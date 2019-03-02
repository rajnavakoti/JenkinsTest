$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2443368043,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User opens the Raisin url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_Opens_The_RaisinUrl()"
});
formatter.result({
  "duration": 21581414527,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify the offers header text on the offers page",
  "description": "",
  "id": "free-crm-login-feature;verify-the-offers-header-text-on-the-offers-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Selects the country \"Other\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on offers page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Offers header text should appear as per the value selected in the Term downdown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Other",
      "offset": 21
    }
  ],
  "location": "LoginStepDef.selects_The_Country(String)"
});
formatter.result({
  "duration": 1169243409,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_Clicks_On_Offers_Page()"
});
formatter.result({
  "duration": 10055023082,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.offers_header_text_should_appear_as_per_the_value_selected_in_the_Term_downdown()"
});
formatter.result({
  "duration": 4149271985,
  "status": "passed"
});
formatter.after({
  "duration": 726398317,
  "status": "passed"
});
formatter.before({
  "duration": 1430231601,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User opens the Raisin url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_Opens_The_RaisinUrl()"
});
formatter.result({
  "duration": 22183325694,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user is able to navigate to registration page of bank with highest interest rate",
  "description": "",
  "id": "free-crm-login-feature;verify-user-is-able-to-navigate-to-registration-page-of-bank-with-highest-interest-rate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Selects the country \"Other\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on offers page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Selects EasyAccess check box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Clicks on the bank with highest interest rate",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User need to navigated to the banks registration page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Other",
      "offset": 21
    }
  ],
  "location": "LoginStepDef.selects_The_Country(String)"
});
formatter.result({
  "duration": 1195418878,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_Clicks_On_Offers_Page()"
});
formatter.result({
  "duration": 4541678969,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.selects_EasyAccess_check_box()"
});
formatter.result({
  "duration": 943370309,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clicks_on_the_bank_with_highest_interest_rate()"
});
formatter.result({
  "duration": 15139021399,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_need_to_navigated_to_the_banks_registration_page()"
});
formatter.result({
  "duration": 11608369,
  "status": "passed"
});
formatter.after({
  "duration": 735221266,
  "status": "passed"
});
});