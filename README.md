# Environment

```$xslt
Angular CLI: 7.2.1
Node: 11.6.0
OS: darwin x64
Angular: 7.2.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... language-service, material, material-moment-adapter
... platform-browser, platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.12.3
@angular-devkit/build-angular     0.12.3
@angular-devkit/build-optimizer   0.12.3
@angular-devkit/build-webpack     0.12.3
@angular-devkit/core              7.2.3
@angular-devkit/schematics        7.2.1
@angular/cli                      7.2.1
@ngtools/webpack                  7.2.3
@schematics/angular               7.2.1
@schematics/update                0.12.1
rxjs                              6.3.3
typescript                        3.2.4
webpack                           4.28.4
```

# Introduction

This repository is a Monorepo project which created by two methods and including [Angular Material](https://material.angular.io/components/categories) examples.

- pattern 1( example-one ): declare all components which related to root module.
- pattern 2( example-two ): change all components to modules and import them in parent modules.

Since I need moderate source code, I use Angular Material examples. 

# Purpose

Developer who try to develop with Angular, tend to use pattern 1 I think ( I did too ).
But I recommend pattern 2 because of development efficiency.
In Addition, spend time to change pattern 1 to 2, therefore I want to express the difference between pattern 1 and 2.

# Why Pattern 2 is better than 1

Please see these two module and compare.

```
~example-one/src/app/roots/categories.module.ts

~example-two/src/app/roots/categories.module.ts
```

- Declare all component in root module so that you might feel that it is hard to read. 
- root module manage all modules which belong to declared components, then you cannot edit source code easily.
- When a project use two or more lazy loading root modules and use same components, then you need to change component to module after all.
