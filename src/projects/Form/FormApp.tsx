import { useEffect, useState } from 'react'
import type { FormData } from './types'

const STORAGE_KEY = 'react-form-data'

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
}

export default function Form() {
  const [form, setForm] = useState<FormData>(initialState)

  // hydrate from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      setForm({ ...initialState, ...parsed })
    }
  }, [])

  // persist
  useEffect(() => {
    const { resume, ...rest } = form
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rest))
  }, [form])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked

      if (name in form.subjects) {
        setForm(prev => ({
          ...prev,
          subjects: {
            ...prev.subjects,
            [name]: checked,
          },
        }))
        return
      }
    }

    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setForm(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('submit payload', form)
  }

  const handleReset = () => {
    setForm(initialState)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black w-full max-w-xl rounded-xl shadow p-6 space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Form in React</h1>

        <Input label="First Name*" name="firstName" value={form.firstName} onChange={handleChange} />
        <Input label="Last Name*" name="lastName" value={form.lastName} onChange={handleChange} />
        <Input label="Email*" name="email" value={form.email} onChange={handleChange} />
        <Input label="Contact*" name="contact" value={form.contact} onChange={handleChange} />

        {/* gender */}
        <div>
          <label className="block font-medium mb-1">Gender*</label>
          <div className="flex gap-4">
            {['male', 'female', 'other'].map(g => (
              <label key={g} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* subjects */}
        <div>
          <label className="block font-medium mb-1">Your best Subject</label>
          <div className="flex gap-4">
            {Object.entries(form.subjects).map(([key, value]) => (
              <label key={key} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleChange}
                />
                {key}
              </label>
            ))}
          </div>
        </div>

        {/* file */}
        <div>
          <label className="block font-medium mb-1">Upload Resume*</label>
          <input type="file" onChange={handleFile} className="text-black" />
        </div>

        <Input label="Enter URL*" name="url" value={form.url} onChange={handleChange} />

        {/* select */}
        <div>
          <label className="block font-medium mb-1">Select your choice</label>
          <select
            name="choice"
            value={form.choice}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          >
            <option value="">Select your Ans</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>

        {/* textarea */}
        <div>
          <label className="block font-medium mb-1">About</label>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            className="w-full border p-2 rounded h-32 text-black"
          />
        </div>

        {/* actions */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="bg-green-500 text-black px-6 py-2 rounded"
          >
            Reset
          </button>

          <button
            type="submit"
            className="bg-green-500 text-black px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

type InputProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, name, value, onChange }: InputProps) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded text-black"
      />
    </div>
  )
}
