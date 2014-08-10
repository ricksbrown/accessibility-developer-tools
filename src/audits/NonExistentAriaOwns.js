// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.require('axs.AuditRule');
goog.require('axs.AuditRules');
goog.require('axs.constants.Severity');

/**
 * @type {axs.AuditRule.Spec}
 */
axs.AuditRule.specs.nonExistentAriaOwnsElement = {
    name: 'nonExistentAriaOwnsElement',
    heading: 'aria-owns attributes should refer to an element which exists in the DOM',
    url: 'https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_aria_06--aria-owns-attributes-should-refer-to-an-element-which-exists-in-the-dom',
    severity: axs.constants.Severity.WARNING,
    relevantElementMatcher: function(element) {
        return axs.browserUtils.matchSelector(element, '[aria-owns]');
    },
    test: function(element) {
        var propertyValueText = element.getAttribute('aria-owns');
        var propertyValue = axs.utils.getAriaPropertyValue('aria-owns', propertyValueText, element);
        return !propertyValue.valid;
    },
    code: 'AX_ARIA_06'
};