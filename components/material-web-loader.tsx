'use client'
import { useEffect } from 'react'
export function MaterialWebLoader() { useEffect(() => { import('@material/web/all.js') }, []); return null }
