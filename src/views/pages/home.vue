<script setup>
import { ref, onMounted, nextTick } from "vue";
import nodeJsdefaultCode from "../../data/node_js_default_code.js";
import python3DefaultCode from "../../data/python_default_code.js";

import ace from "ace-builds";
import "ace-builds/css/ace.css";

/// Component datas
let reTest = ref(false);

const editorElement = ref(null);
console.log(ace);

const editor = ace.edit(null, {
  maxLines: 50,
  minLines: 10,
  value: nodeJsdefaultCode,
  mode: "ace/mode/javascript",
  bug: 1,
});

onMounted(() => {
  // editor.selection.setRange(new Range(0,0,0,3))

  editorElement.value.appendChild(editor.container);
});
</script>
<template>
  <div class="fs-container">
    <div class="flex-none md:flex">
      <div class="fs-left-panel md:basis-2/5">
        <div class="left-panel-container">
          <div class="full-screen-sidebar"></div>
          <div class="left-panel-content p-5">
            <div class="challenge-text">
              <div class="challenge-body-html">
                Given an array of integers, calculate the ratios of its elements
                that are positive, negative, and zero. Print the decimal value
                of each fraction on a new line with places after the decimal.
                Note: This challenge introduces precision problems. The test
                cases are scaled to six decimal places, though answers with
                absolute error of up to are acceptable. Example There are
                elements, two positive, two negative and one zero. Their ratios
                are , and . Results are printed as: 0.400000 0.400000 0.200000
                Function Description Complete the plusMinus function in the
                editor below. plusMinus has the following parameter(s): int
                arr[n]: an array of integers Print Print the ratios of positive,
                negative and zero values in the array. Each value should be
                printed on a separate line with digits after the decimal. The
                function should not return a value. Input Format The first line
                contains an integer, , the size of the array. The second line
                contains space-separated integers that describe . Constraints
                Output Format Print the following lines, each to decimals:
                proportion of positive values proportion of negative values
                proportion of zeros Sample Input STDIN Function ----- -------- 6
                arr[] size n = 6 -4 3 -9 0 4 1 arr = [-4, 3, -9, 0, 4, 1] Sample
                Output
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fs-right-panel md:basis-3/5">
        <div class="editor-container">
          <div
            class="challenge-editor-header flex justify-end items-center p-3"
          >
            <div class="pr-5"><a href="#">Change Theme</a></div>
            <div>
              <span class="pr-3">Language</span>
              <select class="language-select text-center" name="language">
                <option selected value="Javascript">Javascript</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
              </select>
            </div>
            <div class="hr-monaco-reset-code px-3">
              <button
                class="ui-btn ui-btn-normal cursor reset-btn ui-btn-styled"
                title="Reset Code"
                type="button"
              >
                <div class="ui-content align-icon-right">
                  <span class="ui-text" aria-hidden="false"
                    ><svg
                      viewBox="0 0 48 48"
                      width="1em"
                      height="1em"
                      class="icon-grey reset-code-icon ui-svg-icon"
                      fill="currentColor"
                    >
                      <path
                        d="M40 8.9C31.7.1 17.7-.3 8.9 8L5.7 4.9c-.4-.4-.9-.7-1.5-.7C3 4.2 2 5.2 2 6.4v8.8c0 1.2 1 2.2 2.2 2.2H13c.6 0 1.2-.2 1.6-.7.9-.9.8-2.3 0-3.1L12 11.1c3.3-3 7.5-4.7 12-4.7 9.7 0 17.6 7.9 17.6 17.6S33.7 41.6 24 41.6c-9.7 0-17.6-7.9-17.6-17.6 0-1.2-1-2.2-2.2-2.2C3 21.8 2 22.8 2 24c0 5.6 2.1 11 6 15.1 8.3 8.8 22.3 9.3 31.1.9 8.8-8.3 9.2-22.3.9-31.1z"
                      ></path>
                      <path
                        d="M26.6 31.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l6-6c.8-.8.8-2 0-2.8l-6-6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l4.6 4.6-4.6 4.6c-.8.8-.8 2 0 2.8zm-5.2-14.8c-.8-.8-2-.8-2.8 0l-6 6c-.8.8-.8 2 0 2.8l6 6c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L16.8 24l4.6-4.6c.8-.8.8-2 0-2.8z"
                      ></path></svg
                  ></span>
                </div>
              </button>
            </div>

            <div class="hr-monaco-settings-editor pr-3">
              <button
                class="ui-icon-btn ui-btn-normal settings-toggle settings-toggle--active"
                tabindex="0"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Editor Settings"
                title="Editor Settings"
              >
                <span class="sr-only">More</span
                ><svg
                  viewBox="0 0 36 36"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  focusable="false"
                  class="ui-svg-icon"
                  fill="currentColor"
                >
                  <path
                    d="M18 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="challenge-editor-content">
            <div class="editor-content-body" ref="editorElement"></div>
          </div>
        </div>
        <div class="editor-footer my-3 justify-between">
          <div class="flex items-center">
            <button class="button">
              <i class="gg-software-upload"></i>
              <span class="px-3">Upload Code as File</span>
            </button>
            <button class="button">
              <input type="checkbox" v-model="reTest" />
              <span class="px-2">Test against custom input</span>
            </button>
          </div>

          <div class="flex items-center">
            <button class="button button-white mx-3">Run Code</button>
            <button class="button button-primary">Submit Code</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
