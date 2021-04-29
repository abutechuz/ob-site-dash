import './Stat.scss'
import Container from '../../components/Container/Container'
import DashReg from '../../components/DashReg/DashReg'
import DashAge from '../../components/DashAge/DashAge'
import DashProf from '../../components/DashProf/DashProf'

function Stat() {
    return (
        <>
            <section className='stats'>
                <h2 className='visually-hidden'>section</h2>
                <Container className='stats__container'>
                    <div className='stats__inner'>
                        <DashReg />
                        <DashAge />
                    </div>
                    <DashProf />
                </Container>
            </section>
        </>
    )
}
export default Stat
