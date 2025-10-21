import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kurt Adams for industrial automation projects and consulting',
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <SectionHeader
          title="Get in Touch"
          subtitle="Interested in discussing automation projects or opportunities? Let's connect."
          centered
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <Card>
              <h3 className="mb-6 text-xl font-bold text-primary-400 uppercase tracking-wider">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-primary-500 uppercase text-xs tracking-wider">Email</p>
                    <a
                      href="mailto:kurt_a@me.com"
                      className="text-neutral-200 hover:text-primary-400"
                    >
                      kurt_a@me.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-primary-500 uppercase text-xs tracking-wider">Phone</p>
                    <a
                      href="tel:+61434720160"
                      className="text-neutral-200 hover:text-primary-400"
                    >
                      0434 720 160
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-primary-500 uppercase text-xs tracking-wider">Location</p>
                    <p className="text-neutral-200">Perth, Western Australia</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Links */}
            <Card>
              <h3 className="mb-6 text-xl font-bold text-primary-400 uppercase tracking-wider">
                Professional Links
              </h3>
              <div className="space-y-4">
                <Button
                  href="https://linkedin.com/in/kurt-adams-automation"
                  variant="outline"
                  fullWidth
                  icon={<Linkedin className="h-5 w-5" />}
                  iconPosition="left"
                >
                  LinkedIn Profile
                </Button>

                <Button
                  href="https://github.com/tchiro88"
                  variant="outline"
                  fullWidth
                  icon={<Github className="h-5 w-5" />}
                  iconPosition="left"
                >
                  GitHub Profile
                </Button>

                <Button
                  href="mailto:kurt_a@me.com"
                  variant="primary"
                  fullWidth
                  icon={<Mail className="h-5 w-5" />}
                  iconPosition="left"
                >
                  Send Email
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8">
            <h3 className="mb-4 text-xl font-bold text-primary-400 uppercase tracking-wider">
              Areas of Expertise
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-semibold text-primary-500 uppercase text-sm tracking-wider">Control Systems</h4>
                <p className="text-sm text-neutral-200">
                  PLC programming, SCADA design, and DCS integration
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary-500 uppercase text-sm tracking-wider">IIoT Solutions</h4>
                <p className="text-sm text-neutral-200">
                  Node-RED, MQTT, edge computing, and data analytics
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary-500 uppercase text-sm tracking-wider">Project Engineering</h4>
                <p className="text-sm text-neutral-200">
                  End-to-end project delivery from design to commissioning
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
}
