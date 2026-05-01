import { use, useEffect, useState } from 'react';
import type { FormData } from './types';

const STORAGE_KEY = 'form-data';

const initialState: FormData = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	gender: 'male',
	subjects: {
		english: false,
		maths: false,
		physics: false,
	},
	resume: null,
	url: '',
	choice: '',
	about: '',
};

export default function Form() {
	const [form, setForm] = useState<FormData>(initialState);

	// hydrate from localStorage
	useEffect(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw) as Partial<FormData>;
			setForm({ ...initialState, ...parsed });
		}
	}, []);

	// persist
	useEffect(() => {
		const { resume, ...dataToPersist } = form;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToPersist));
	}, [form]);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target;

		if (type === 'checkbox') {
			const checked = (e.target as HTMLInputElement).checked;

			if (name in form.subjects) {
				setForm((prev) => ({
					...prev,
					subjects: {
						...prev.subjects,
						[name]: checked,
					},
				}));
				return;
			}
		}

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		setForm((prev) => ({ ...prev, resume: file }));
	};
}
