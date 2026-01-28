import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'

function SubmitJoke() {
  return (
    <div>
      <Field>
        <Label>Description</Label>
        <Textarea
          name="description"
          className="text-white !before:bg-white/20 border-white/30 dark:bg-white/10"
        />
      </Field>
    </div>
  )
}

export default SubmitJoke
