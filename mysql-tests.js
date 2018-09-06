// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mysql.js.
import { name as packageName } from "meteor/underzero:mysql";

// Write your tests here!
// Here is an example.
Tinytest.add('mysql - example', function (test) {
  test.equal(packageName, "mysql");
});
