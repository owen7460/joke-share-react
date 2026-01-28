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
  const handleSubmit = e => {
    if (e?.preventDefault) e.preventDefault()
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
    <form onSubmit={handleSubmit}>
      <Field className="space-y-8">
        <Label htmlFor="content">
          <p className="text-white text-2xl">Tell us your joke</p>
        </Label>
        <Description>
          <span className="text-white">
            Let's share your joke with the world!
          </span>
        </Description>
        <Textarea
          aria-label="Enter your joke"
          name="content"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
        />
        <Button type="submit" color="dark" outline>
          <span className="text-white"> Submit</span>
        </Button>
      </Field>
    </form>
  )
}

export default SubmitJoke
