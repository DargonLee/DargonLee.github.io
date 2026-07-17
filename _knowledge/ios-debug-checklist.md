---
title: iOS 调试问题排查清单
summary: 日常 Xcode / 真机 / 越狱调试时常用的排查顺序与检查项。
date: 2026-07-01
category: iOS
tags:
  - Debug
  - Xcode
  - Checklist
---

## 现象先写清楚

- 必现还是偶现？
- Debug / Release 是否一致？
- 模拟器与真机是否一致？
- 最近改动了什么（依赖、证书、系统版本）？

## 快速检查顺序

1. **清构建缓存**：Product → Clean Build Folder，必要时删除 DerivedData。
2. **确认签名与 Bundle ID**：尤其是企业签 / 越狱调试场景。
3. **看 Console 与 OSLog**：过滤 subsystem / category，而不是只看 Xcode 红字。
4. **断点与符号**：确认 dSYM、Bitcode、剥离符号是否影响堆栈。
5. **隔离最小复现**：新建空工程或关掉无关模块验证。

## 越狱 / Rootless 场景补充

- 确认进程是否在正确 sandbox / rootless 路径下。
- 注入失败时检查 entitlements、库架构（arm64e）与签名。
- 先验证 `dlopen` / 注入点是否触发，再查业务逻辑。

## 复盘模板

每次解决后建议补三条：

1. **根因**是什么  
2. **为什么之前没发现**  
3. **下次如何更早拦住**（脚本、CI、断言、文档）
