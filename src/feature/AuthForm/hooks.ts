import { useRef } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

const useFormRef = <T extends FieldValues>() => useRef<{ methods: UseFormReturn<T> } | null>(null);

export { useFormRef };
