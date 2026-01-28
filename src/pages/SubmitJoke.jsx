import { Description, Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { useState } from 'react'
import { submitJoke } from '@/apis/SubmitJoke'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
function SubmitJoke() {
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (!content) {
      toast.error('Please enter a joke')
      return
    }
    submitJoke(content)
      .then(() => {
        navigate('/jokes')
        toast.success('Joke submitted successfully')
      })
      .catch(err => {
        toast.error('Failed to submit joke', err)
      })
  }

  return (
    <Field className="space-y-8">
      <Label className="!text-4xl">Input your joke</Label>
      <Description className="!text-white">
        Let's share your joke with the world!
      </Description>
      <Textarea
        name="content"
        id="content"
        onChange={e => setContent(e.target.value)}
      />
      <Button onClick={handleSubmit} className="!text-black !bg-amber-100">
        Submit
      </Button>
    </Field>
  )
}

export default SubmitJoke
