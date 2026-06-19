#!/usr/bin/env node
/** Sync vendor/@arvo/tokens/src/scss/_animation.scss from src/data/motionTokens.js (docs source of truth). */
import { writeFileSync } from 'fs'
import { buildArvoAnimationScss } from '../src/utils/arvoAnimationScss.js'

const target = 'vendor/@arvo/tokens/src/scss/_animation.scss'
writeFileSync(target, buildArvoAnimationScss())
console.log(`[sync:animation] Wrote ${target}`)
